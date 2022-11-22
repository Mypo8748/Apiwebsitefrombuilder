import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { productDto } from './dto/product.dto';
import { ProductEntity } from './dto/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getAll() {
    return this.productService.findAll();
  }
  @Post()
  async createproduct(@Body() product: productDto): Promise<ProductEntity> {
    return this.productService.create(product);
  }

  // update todo
  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() todo: productDto) {
    return this.productService.updateProduct(Number(id), todo);
  }

  //delete todo
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    this.productService.deleteProduct(Number(id));
  }
}
