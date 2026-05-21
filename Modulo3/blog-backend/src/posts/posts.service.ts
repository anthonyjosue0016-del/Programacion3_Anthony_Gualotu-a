import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from '../categories/category.entity';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const category = await this.categoryRepository.findOne({ where: { id: createPostDto.categoryId } });
    if (!category) throw new NotFoundException('Categoría no encontrada');

    const post = this.postRepository.create({
      title: createPostDto.title,
      content: createPostDto.content,
      category,
    });
    return this.postRepository.save(post);
  }

  async findAll(queryDto: QueryDto): Promise<Pagination<Post> | null> {
    try {
      const { page, limit, search, searchField, sort, order } = queryDto;
      const query = this.postRepository.createQueryBuilder('post');
      query.leftJoinAndSelect('post.category', 'category');

      if (search) {
        if (searchField) {
          switch (searchField) {
            case 'title':
              query.where('post.title ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            case 'content':
              query.where('post.content ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            case 'category':
              query.where('category.name ILIKE :search', {
                search: `%${search}%`,
              });
              break;
            default:
              query.where(
                '(post.title ILIKE :search OR post.content ILIKE :search OR category.name ILIKE :search)',
                { search: `%${search}%` },
              );
          }
        } else {
          query.where(
            '(post.title ILIKE :search OR post.content ILIKE :search OR category.name ILIKE :search)',
            { search: `%${search}%` },
          );
        }
      }

      if (sort) {
        query.orderBy(`post.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
      }

      return await paginate<Post>(query, { page, limit });
    } catch (err) {
      console.error('Error retrieving posts:', err);
      return null;
    }
  }

  findOne(id: string) {
    return this.postRepository.findOne({ where: { id }, relations: ['category'] });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({ where: { id }, relations: ['category'] });
    if (!post) throw new NotFoundException('Post no encontrado');

    if (updatePostDto.categoryId) {
      const category = await this.categoryRepository.findOne({ where: { id: updatePostDto.categoryId } });
      if (!category) throw new NotFoundException('Categoría no encontrada');
      post.category = category;
    }

    Object.assign(post, updatePostDto);
    return this.postRepository.save(post);
  }

  async remove(id: string) {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) throw new NotFoundException('Post no encontrado');
    return this.postRepository.remove(post);
  }
}