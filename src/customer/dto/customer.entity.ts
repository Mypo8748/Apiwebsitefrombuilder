import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('customer')
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    customerID: number ;

    @Column({nullable: true,})
    customerFirstName : string;

    @Column({nullable: true,})
    customerLastName : string;

    @Column({nullable: true,})
    customerPhone : string;

    @Column({nullable: true,})
    customerEmail : string ;

    @Column({nullable: true,})
    customerAddress : string ;

    @Column({nullable: true,})
    WorkDetails  : string ;

}