import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  constructor(private readonly prismaTask: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prismaTask.task.create({data});
  }

  findAll() {
    return this.prismaTask.task.findMany();
  }

  findOne(id: number) {
    return this.prismaTask.task.findUnique({ where: { id } });
  }

  update(id: number, updateTareaDto: UpdateTaskDto) {
    return this.prismaTask.task.update({ where: { id }, data: updateTareaDto });
  }

  remove(id: number) {
    return this.prismaTask.task.delete({ where: { id } });
  }
}