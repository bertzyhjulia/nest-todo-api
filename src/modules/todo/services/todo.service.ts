import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }
  async update(todo: Todo): Promise<Todo> {
    await this.todoRepository.findOneOrFail(todo.id);

    return this.todoRepository.save(todo);
  }

  findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
