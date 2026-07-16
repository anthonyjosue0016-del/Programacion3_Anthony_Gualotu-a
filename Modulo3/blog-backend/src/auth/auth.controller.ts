import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UnauthorizedException,
  Get,
  Query,
  Res,
  Req,
  Delete,
  UseGuards,
} from '@nestjs/common';
import type { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.login(loginDto);
    if (!token) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return new SuccessResponseDto('Login successful', { access_token: token });
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const token = await this.authService.register(createUserDto);
    if (!token) {
      throw new BadRequestException('Failed to register user');
    }
    return new SuccessResponseDto('Registration successful', { access_token: token });
  }

  @Get('google')
  async googleAuth(@Query('state') state: string, @Res() res: Response) {
    const redirectUrl = this.authService.getGoogleAuthUrl(state);
    return res.redirect(redirectUrl);
  }

  @Get('google/callback')
  async googleCallback(
    @Query('code') code: string,
    @Query('state') state: string,
    @Res() res: Response,
  ) {
    if (!code) {
      throw new BadRequestException('Google callback code is required');
    }

    const token = await this.authService.handleGoogleCallback(code);
    if (!token) {
      throw new BadRequestException('Google authentication failed');
    }

    const separator = state && state.includes('?') ? '&' : '?';
    const redirectTo = state ? `${state}${separator}token=${token}` : `/auth/success?token=${token}`;
    return res.redirect(redirectTo);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('google')
  async unlinkGoogle(@Req() req: Request & { user?: any }) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('User not authenticated');
    }

    const user = await this.authService.unlinkGoogle(userId);
    if (!user) {
      throw new BadRequestException('Unable to unlink Google account');
    }
    return new SuccessResponseDto('Google account unlinked successfully', user);
  }
}