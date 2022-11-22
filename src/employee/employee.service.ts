import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { employeeDto } from './dto/employee.dto';
import { employeeEntity } from './dto/employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(employeeEntity) private readonly userRepository: Repository<employeeEntity>
      ){
  
      }
      async create(data: any): Promise<employeeEntity> {
        return this.userRepository.save(data);

    }
    async findAll(): Promise<employeeEntity[]> {
        return this.userRepository.find();
      }
      // update
  async updateEmployee(id: number, post: employeeDto) {
    await this.userRepository.update(id, post);
   
    // throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteEmployee(id: number) {
    const deletedTodo = await this.userRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }
}
