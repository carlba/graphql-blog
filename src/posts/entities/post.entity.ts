import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
