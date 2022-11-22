import { Repository } from 'typeorm';
import { productDto } from './dto/product.dto';
import { ProductEntity } from './dto/product.entity';
export declare class ProductService {
    private readonly userRepository;
    constructor(userRepository: Repository<ProductEntity>);
    create(data: any): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    updateProduct(id: number, post: productDto): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}
