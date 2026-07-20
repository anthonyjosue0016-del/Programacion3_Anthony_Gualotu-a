import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryDto } from 'src/common/dto/query.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    try {
      const existingEmail = await this.findByEmail(createUserDto.email);
      const existingUsername = await this.findByUsername(createUserDto.username);
      if (existingEmail || existingUsername) {
        throw new ConflictException('Username or email already exists');
      }

      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
        roles: createUserDto.roles ?? ['user'],
      });
      return await this.userRepository.save(user);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      console.error('Error creating user:', error);
      return null;
    }
  }

  async findAll(
    queryDto: QueryDto,
    isActive?: boolean,
  ): Promise<Pagination<User> | null> {
    try {
      const { page, limit, search, searchField, sort, order } = queryDto;
      const query = this.userRepository.createQueryBuilder('user');

      if (isActive !== undefined) {
        query.andWhere('user.isActive = :isActive', { isActive });
      }

      if (search) {
        if (searchField) {
          switch (searchField) {
            case 'username':
              query.andWhere('user.username ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            case 'email':
              query.andWhere('user.email ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            default:
              query.andWhere(
                '(user.username ILIKE :search OR user.email ILIKE :search)',
                { search: `%${search}%` },
              );
          }
        } else {
          query.andWhere(
            '(user.username ILIKE :search OR user.email ILIKE :search)',
            { search: `%${search}%` },
          );
        }
      }

      if (sort) {
        query.orderBy(`user.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
      }

      return await paginate<User>(query, { page, limit });
    } catch (err) {
      console.error('Error retrieving users:', err);
      return null;
    }
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async findByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async findByUsernameOrEmail(identifier: string) {
    return this.userRepository.createQueryBuilder('user')
      .where('user.username = :identifier OR user.email = :identifier', { identifier })
      .getOne();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    if (updateUserDto.username && updateUserDto.username !== user.username) {
      const existingUsername = await this.findByUsername(updateUserDto.username);
      if (existingUsername) {
        throw new ConflictException('Username already exists');
      }
    }

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingEmail = await this.findByEmail(updateUserDto.email);
      if (existingEmail) {
        throw new ConflictException('Email already exists');
      }
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    return this.userRepository.remove(user);
  }

  async updateProfile(id: string, profile: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    user.profile = profile;
    user.avatarUrl = `/public/profile/${profile}`;
    return this.userRepository.save(user);
  }

  async unlinkGoogle(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    user.googleId = null;
    return this.userRepository.save(user);
  }

  async findByGoogleId(googleId: string) {
    return this.userRepository.findOne({ where: { googleId } });
  }

  async updateGoogleAccount(id: string, googleId: string, avatarUrl?: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    user.googleId = googleId;
    if (avatarUrl) {
      user.avatarUrl = avatarUrl;
    }
    return this.userRepository.save(user);
  }

  async createGoogleUser(email: string, username: string, googleId: string, avatarUrl?: string) {
    const hashedPassword = await bcrypt.hash(Math.random().toString(36).slice(-10), 10);
    const user = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
      googleId,
      avatarUrl,
      roles: ['user'],
    });
    return this.userRepository.save(user);
  }
}
