import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { taskDto } from './dto/task.dto';
import { TaskEntity } from './dto/task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor( private TaskService : TaskService){}
    @Get()
    async getAll (){
        return this.TaskService.findAll()

    }
    @Post()
    async createproduct( @Body() task: taskDto ) : Promise<TaskEntity>{
        return this.TaskService.create(task)
    }
    // update todo
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() todo: taskDto) {
    return this.TaskService.updateTask(Number(id), todo);
  }

  //delete todo
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    this.TaskService.deleteTask(Number(id));
  }
}
