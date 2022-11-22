import { Repository } from 'typeorm';
import { taskDto } from './dto/task.dto';
import { TaskEntity } from './dto/task.entity';
export declare class TaskService {
    private readonly userRepository;
    constructor(userRepository: Repository<TaskEntity>);
    create(data: any): Promise<TaskEntity>;
    findAll(): Promise<TaskEntity[]>;
    updateTask(id: number, post: taskDto): Promise<void>;
    deleteTask(id: number): Promise<void>;
}
