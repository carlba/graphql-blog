import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The id of the blog post' })
  id: number;

  @Column()
  @Field(() => String, { description: 'The title of the blog post' })
  title: string;
}
