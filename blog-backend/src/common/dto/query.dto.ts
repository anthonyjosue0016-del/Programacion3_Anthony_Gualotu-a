import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class QueryDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  searchField?: string;

  @IsOptional()
  @IsString()
  sort?: string;

  @IsOptional()
  @IsEnum(['ASC', 'DESC'] as const)
  order?: 'ASC' | 'DESC';
}
