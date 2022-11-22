import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { customerDto } from './dto/customer.dto';
import { CustomerEntity } from './dto/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly userRepository: Repository<CustomerEntity>,
  ) {}
  async create(data: any): Promise<CustomerEntity> {
    return this.userRepository.save(data);
  }
  async findAll(): Promise<CustomerEntity[]> {
    return this.userRepository.find();
  }
  // update
  async updateCustomer(id: number, post: customerDto) {
    await this.userRepository.update(id, post);

    // throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteCustomer(id: number) {
    const deletedTodo = await this.userRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }
}
