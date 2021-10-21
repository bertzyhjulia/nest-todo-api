import { Controller, Delete, Get } from '@nestjs/common';

@Controller('rest/todo-list')
export class TodoListController {
  @Get()
  getAll() {
    return 'todo all list';
  }
  @Get()
  getOne() {
    return 'get one todo';
  }
  @Delete()
  remove() {
    return 'delete todo from list';
  }
}
