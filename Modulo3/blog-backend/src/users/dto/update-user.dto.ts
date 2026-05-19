import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsString()
  @IsNotEmpty()
  email?: string;
    
  @IsOptional()
  @IsString()
  password?: string;
}