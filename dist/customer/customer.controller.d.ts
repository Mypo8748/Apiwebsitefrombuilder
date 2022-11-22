import { CustomerService } from './customer.service';
import { customerDto } from './dto/customer.dto';
import { CustomerEntity } from './dto/customer.entity';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    getAll(): Promise<CustomerEntity[]>;
    createproduct(customer: customerDto): Promise<CustomerEntity>;
    updateCustomer(id: string, todo: customerDto): Promise<void>;
    deleteCustomer(id: string): Promise<void>;
}
