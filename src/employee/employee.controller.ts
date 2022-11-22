import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { employeeDto } from './dto/employee.dto';
import { employeeEntity } from './dto/employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeetService: EmployeeService) {}
  @Get()
  async getAll() {
    return this.employeetService.findAll();
  }
  @Post()
  async createproduct(@Body() employee: employeeDto): Promise<employeeEntity> {
    return this.employeetService.create(employee);
  }
  // update todo
  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() todo: employeeDto) {
    return this.employeetService.updateEmployee(Number(id), todo);
  }

  //delete todo
  @Delete(':id')
  async deleteEmployee(@Param('id') id: string) {
    this.employeetService.deleteEmployee(Number(id));
  }
}
