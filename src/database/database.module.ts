import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'graphql-blog',
      password: 'graphql-blog',
      database: 'graphql-blog',
      entities: [Post],
      autoLoadEntities: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {}
