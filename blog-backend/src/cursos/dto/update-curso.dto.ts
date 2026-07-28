import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-curso.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}