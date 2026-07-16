import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ContenidoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsNumber()
  @Type(() => Number)
  duracion: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  enlace: string;

  @IsString()
  @IsNotEmpty()
  dificultad: string;

  @IsDateString()
  fecha_publicacion: string;

  @IsOptional()
  completado?: boolean;

  @IsString()
  @IsNotEmpty()
  tiempo_estimado: string;

  @IsString()
  @IsNotEmpty()
  video_id: string;
}

class InstructorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsDateString()
  fecha_inicio: string;

  @IsDateString()
  fecha_fin: string;

  @IsString()
  @IsNotEmpty()
  nivel: string;

  @IsOptional()
  @IsArray()
  @Type(() => String)
  requisitos?: string[];

  @IsNumber()
  @Type(() => Number)
  precio: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => InstructorDto)
  instructor?: InstructorDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContenidoDto)
  contenidos?: ContenidoDto[];
}
