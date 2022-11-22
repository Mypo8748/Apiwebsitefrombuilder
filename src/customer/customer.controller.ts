import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerDto } from './dto/customer.dto';
import { CustomerEntity } from './dto/customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}
  @Get()
  async getAll() {
    return this.customerService.findAll();
  }
  @Post()
  async createproduct(@Body() customer: customerDto): Promise<CustomerEntity> {
    return this.customerService.create(customer);
  }
  // update todo
  @Put(':id')
  async updateCustomer(@Param('id') id: string, @Body() todo: customerDto) {
    return this.customerService.updateCustomer(Number(id), todo);
  }

  //delete todo
  @Delete(':id')
  async deleteCustomer(@Param('id') id: string) {
    this.customerService.deleteCustomer(Number(id));
  }
}
