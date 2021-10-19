import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getAll(): string {
    return 'Hello world';
  }
  @Get('id')
  getOne(@Param('id') id: string): string {
    return 'return ' + id;
  }
  @Post()
  save() {
    return 'Create or save';
  }
}
