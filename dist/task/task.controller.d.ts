import { taskDto } from './dto/task.dto';
import { TaskEntity } from './dto/task.entity';
import { TaskService } from './task.service';
export declare class TaskController {
    private TaskService;
    constructor(TaskService: TaskService);
    getAll(): Promise<TaskEntity[]>;
    createproduct(task: taskDto): Promise<TaskEntity>;
    updateTask(id: string, todo: taskDto): Promise<void>;
    deleteTask(id: string): Promise<void>;
}
