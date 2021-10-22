import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
import { CreateDto, UpdateDto } from './dto';
import { NotFoundResponse } from './type';

@ApiTags('todo')
@Controller('rest/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all todo',
    type: [Todo],
  })
  getAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get todo by id',
    type: Todo,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  getOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'create todo',
    type: Todo,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiBody({ type: CreateDto })
  create(@Body() createDto: CreateDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDto.title;
    if (createDto.isCompleted !== undefined) {
      todo.isCompleted = createDto.isCompleted;
    }
    return this.todoService.create(todo);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'update todo',
    type: Todo,
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  @ApiBody({ type: UpdateDto })
  async update(
    @Param('id') id: string,
    @Body() { title, isCompleted },
  ): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    todo.title = title;
    todo.isCompleted = isCompleted;
    return this.todoService.update(todo);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'delete todo',
  })
  @ApiResponse({
    status: 404,
    description: 'not found',
    type: NotFoundResponse,
  })
  async deleteStr(@Param('id') id: string): Promise<{ success: boolean }> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new NotFoundException('Todo with id= ' + id + ' not found');
    }
    await this.todoService.remove(id);
    return {
      success: true,
    };
  }
}
