import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'graphql-blog',
      password: 'graphql-blog',
      database: 'graphql-blog',
    }),
  ],
})
export class DatabaseModule {}
