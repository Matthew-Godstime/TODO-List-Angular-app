export class TasksClass {
    static tasksStorage: TasksClass[] = [];
    static subTasksStorage: TasksClass[] = [];
    constructor(
        public id: number,
        public task: string,
        public week: number,
        public checked: boolean
    ) { }
}


