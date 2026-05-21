import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryDto } from 'src/common/dto/query.dto';
@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  async findAll(queryDto: QueryDto): Promise<Pagination<Category> | null> {
    try {
      const { page, limit, search, searchField, sort, order } = queryDto;
      const query = this.categoryRepository.createQueryBuilder('category');

      if (search) {
        if (searchField) {
          switch (searchField) {
            case 'name':
              query.where('category.name ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            case 'description':
              query.where('category.description ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            default:
              query.where(
                '(category.name ILIKE :search OR category.description ILIKE :search)',
                { search: `%${search}%` },
              );
          }
        } else {
          query.where(
            '(category.name ILIKE :search OR category.description ILIKE :search)',
            { search: `%${search}%` },
          );
        }
      }

      if (sort) {
        query.orderBy(`category.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
      }

      return await paginate<Category>(query, { page, limit });
    } catch (err) {
      console.error('Error retrieving categories:', err);
      return null;
    }
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Categoría no encontrada');
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {

    const category = await this.findOne(id);

    Object.assign(category, updateCategoryDto);

    return await this.categoryRepository.save(category);
  }

  async remove(id: string) {

    const category = await this.findOne(id);

    return await this.categoryRepository.remove(category);
  }
}