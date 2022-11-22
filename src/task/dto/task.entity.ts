import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('task')
export class TaskEntity {
    @PrimaryGeneratedColumn()
    taskID: number ;

    @Column({nullable: true,})
    tasktitle: string;

    @Column({nullable: true,})
    taskdetail: string;

    @Column({nullable: true,})
    taskduedate: string;

    @Column({nullable: true,})
    taskresponsible : string;

    @Column('simple-json')
    taskstatus : {
        complate : boolean
        inprogress : boolean
        notstarted : boolean
    }



}