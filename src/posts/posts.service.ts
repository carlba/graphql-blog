import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  create(createPostInput: CreatePostInput) {
    return this.postsRepository.save(createPostInput);
  }

  findAll() {
    return this.postsRepository.find();
  }

  findOne(id: number) {
    return this.postsRepository.findOneOrFail(id);
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.postsRepository.save({ ...updatePostInput, id });
  }

  remove(id: number) {
    return this.postsRepository.delete(id);
  }
}
