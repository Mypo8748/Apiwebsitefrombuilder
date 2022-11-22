import { Repository } from 'typeorm';
import { customerDto } from './dto/customer.dto';
import { CustomerEntity } from './dto/customer.entity';
export declare class CustomerService {
    private readonly userRepository;
    constructor(userRepository: Repository<CustomerEntity>);
    create(data: any): Promise<CustomerEntity>;
    findAll(): Promise<CustomerEntity[]>;
    updateCustomer(id: number, post: customerDto): Promise<void>;
    deleteCustomer(id: number): Promise<void>;
}
