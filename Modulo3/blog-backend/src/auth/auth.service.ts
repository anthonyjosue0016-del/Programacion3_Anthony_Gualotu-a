import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(loginDto: LoginDto): Promise<string | null> {
    try {
      const user = await this.usersService.findByUsername(loginDto.username);
      if (!user || !user.password) return null;

      const isValid = await bcrypt.compare(loginDto.password, user.password);
      if (!isValid) return null;

      const payload = { id: user.id, username: user.username };
      return this.jwtService.sign(payload);
    } catch (err) {
      console.error('Unexpected login error:', err);
      return null;
    }
  }

  async register(createUserDto: CreateUserDto): Promise<string | null> {
    const user = await this.usersService.create(createUserDto);
    if (!user) return null;

    const payload = { id: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }

  getGoogleAuthUrl(state: string): string {
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    const redirectUri = this.configService.get<string>('GOOGLE_REDIRECT_URI');
    const scope = ['openid', 'profile', 'email'].join(' ');
    const params = new URLSearchParams({
      client_id: clientId || '',
      redirect_uri: redirectUri || '',
      response_type: 'code',
      scope,
      access_type: 'offline',
      prompt: 'consent',
      state: state || '',
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  async handleGoogleCallback(code: string): Promise<string | null> {
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    const clientSecret = this.configService.get<string>('GOOGLE_CLIENT_SECRET');
    const redirectUri = this.configService.get<string>('GOOGLE_REDIRECT_URI');

    if (!clientId || !clientSecret || !redirectUri) {
      throw new BadRequestException('Google OAuth is not configured');
    }

    const tokenResponse = await axios.post(
      'https://oauth2.googleapis.com/token',
      new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );

    const accessToken = tokenResponse.data?.access_token;
    if (!accessToken) return null;

    const profileResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const profile = profileResponse.data;
    if (!profile?.email) return null;

    let user = await this.usersService.findByEmail(profile.email);
    const picture = typeof profile.picture === 'string' ? profile.picture : '';
    const googleId = profile.sub as string;
    if (user) {
      await this.usersService.updateGoogleAccount(user.id, googleId, picture);
    } else {
      const baseUsername = profile.name
        ? profile.name.replace(/\s+/g, '_').toLowerCase()
        : profile.email.split('@')[0];
      let username = baseUsername;
      let counter = 1;
      while (await this.usersService.findByUsername(username)) {
        username = `${baseUsername}_${counter++}`;
      }
      user = await this.usersService.createGoogleUser(
        profile.email,
        username,
        profile.sub,
        picture,
      );
    }

    const payload = { id: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }

  async unlinkGoogle(userId: string) {
    return this.usersService.unlinkGoogle(userId);
  }
}
