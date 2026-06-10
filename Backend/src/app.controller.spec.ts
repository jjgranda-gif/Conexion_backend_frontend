import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { PrismaService } from './prisma/prisma.service';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService, PrismaService],
    }).compile();

    controller = app.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
