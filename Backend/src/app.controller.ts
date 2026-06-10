import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './app.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body() body: {
    title: string;
    description?: string;
    priority?: string;
    category?: string;
  }) {
    return this.tasksService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.tasksService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
