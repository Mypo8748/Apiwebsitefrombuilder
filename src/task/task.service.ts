import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { taskDto } from './dto/task.dto';
import { TaskEntity } from './dto/task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity) private readonly userRepository: Repository<TaskEntity>
      ){
  
      }
      async create(data: any): Promise<TaskEntity> {
        return this.userRepository.save(data);

    }
    async findAll(): Promise<TaskEntity[]> {
        return this.userRepository.find();
      }
       // update
  async updateTask(id: number, post: taskDto) {
    await this.userRepository.update(id, post);
   
    // throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteTask(id: number) {
    const deletedTodo = await this.userRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }
}


