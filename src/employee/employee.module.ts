import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employeeEntity } from './dto/employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([employeeEntity])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
