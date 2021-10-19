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
import { CreateDto, UpdateDto } from './dto';

@Controller()
export class AppController {
  @Get()
  getAll(): string {
    return 'Hello world';
  }
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'return ' + id;
  }
  @Post()
  create(@Body() todo: CreateDto): CreateDto {
    
    return todo;
  }
  @Put(':id')
  update(
  @Param('id') id: string,
  @Body() todo: UpdateDto
  ): UpdateDto {
    return todo;
  }
  @Delete(':id')
  deleteStr(@Param('id') id: string): string {
    return 'Delete element ' + id;
  }
}
