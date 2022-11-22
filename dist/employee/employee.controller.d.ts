import { employeeDto } from './dto/employee.dto';
import { employeeEntity } from './dto/employee.entity';
import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private employeetService;
    constructor(employeetService: EmployeeService);
    getAll(): Promise<employeeEntity[]>;
    createproduct(employee: employeeDto): Promise<employeeEntity>;
    updateEmployee(id: string, todo: employeeDto): Promise<void>;
    deleteEmployee(id: string): Promise<void>;
}
