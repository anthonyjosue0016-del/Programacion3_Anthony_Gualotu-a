import {
  Controller,
  Post as HttpPost,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
  Query,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { QueryDto } from 'src/common/dto/query.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpPost()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postsService.create(createPostDto);
    if (!post) throw new NotFoundException('Category not found or error creating post');
    return new SuccessResponseDto('Post created successfully', post);
  }

  @Get()
  async findAll(
    @Query() query: QueryDto,
  ): Promise<SuccessResponseDto<Pagination<Post>>> {
    if (query.limit && query.limit > 100) {
      query.limit = 100;
    }
    const result = await this.postsService.findAll(query);
    if (!result) throw new InternalServerErrorException('Could not retrieve posts');
    return new SuccessResponseDto('Posts retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    if (!post) throw new NotFoundException('Post not found');
    return new SuccessResponseDto('Post retrieved successfully', post);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const updated = await this.postsService.update(id, updatePostDto);
    if (!updated) throw new NotFoundException('Post not found or category not valid');
    return new SuccessResponseDto('Post updated successfully', updated);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const deleted = await this.postsService.remove(id);
    if (!deleted) throw new NotFoundException('Post not found or could not be deleted');
    return new SuccessResponseDto('Post deleted successfully', id);
  }
}