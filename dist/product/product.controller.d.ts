import { productDto } from './dto/product.dto';
import { ProductEntity } from './dto/product.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll(): Promise<ProductEntity[]>;
    createproduct(product: productDto): Promise<ProductEntity>;
    updateProduct(id: string, todo: productDto): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}
