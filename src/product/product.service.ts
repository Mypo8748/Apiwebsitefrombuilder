import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productDto } from './dto/product.dto';
import { ProductEntity } from './dto/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity) private readonly userRepository: Repository<ProductEntity>
      ){
  
      }
      async create(data: any): Promise<ProductEntity> {
        return this.userRepository.save(data);

    }
    async findAll(): Promise<ProductEntity[]> {
        return this.userRepository.find();
      }
      // update
  async updateProduct(id: number, post: productDto) {
    await this.userRepository.update(id, post);
   
    // throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteProduct(id: number) {
    const deletedTodo = await this.userRepository.delete(id);
    if (!deletedTodo.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }
}
