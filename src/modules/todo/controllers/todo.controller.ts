import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
import { CreateDto, UpdateDto } from './dto';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }
  @Post()
  create(@Body() createDto: CreateDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDto.title;
    if (createDto.isCompleted !== undefined) {
      todo.isCompleted = createDto.isCompleted;
    }
    return this.todoService.create(todo);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() todo: UpdateDto): UpdateDto {
    return todo;
  }
  @Delete(':id')
  deleteStr(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(id);
  }
}
