import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('employee')
export class employeeEntity {
    @PrimaryGeneratedColumn()
    productID: number ;

    @Column({nullable: true,})
    employeeFirstName : string;

    @Column({nullable: true,})
    employeeLastName : string;

    @Column({nullable: true,})
    employeeAge : number;

    @Column({nullable: true,})
    employeePhone : string ;

    @Column({nullable: true,})
    employeeEmail : string ;

    @Column({nullable: true,})
    employeeSalary  : number ;

    @Column({nullable: true,})
    employeePosition : string;

}