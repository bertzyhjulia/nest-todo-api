import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListController } from './controllers/todo-list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [TodoListController],
  providers: [],
})
export class TodoListModule {}
