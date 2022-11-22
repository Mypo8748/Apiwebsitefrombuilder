export interface taskDto {
    taskID?: number;
    tasktitle: string;
    taskdetail: string;
    taskduedate: string;
    taskresponsible: string;
    taskstatus: {
        complate: boolean;
        inprogress: boolean;
        notstarted: boolean;
    };
}
