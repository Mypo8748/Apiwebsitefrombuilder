import { Repository } from 'typeorm';
import { employeeDto } from './dto/employee.dto';
import { employeeEntity } from './dto/employee.entity';
export declare class EmployeeService {
    private readonly userRepository;
    constructor(userRepository: Repository<employeeEntity>);
    create(data: any): Promise<employeeEntity>;
    findAll(): Promise<employeeEntity[]>;
    updateEmployee(id: number, post: employeeDto): Promise<void>;
    deleteEmployee(id: number): Promise<void>;
}
