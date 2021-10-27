import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database.providers';
import { relationProviders } from './importand/provide/importand.providers';
import { RelationService } from './importand/services/importand.service';
import { TodoListController } from './todo-list/controllers/todo-list.controller';
import { TodoController } from './todo/controllers/todo.controller';
import { Todo } from './todo/entities/todo.entity';
import { TodoService } from './todo/services/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController, TodoListController],
  providers: [
    ...relationProviders,
    TodoService,
    RelationService,
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class TodoModule {}
