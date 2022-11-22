import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    productID: number ;

    @Column({nullable: true,})
    productName: string;

    @Column({nullable: true,})
    productDetail: string;

    @Column({nullable: true,})
    productprice: number;

    @Column({nullable: true,})
    productInstock : number;


}