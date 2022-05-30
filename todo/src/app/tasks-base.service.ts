import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { TasksClass } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksBaseService {

  constructor() { }


  public getTasks() {
    TasksClass.tasksStorage
  }

  public getSubTasks(): Observable<TasksClass[]> {
    const tasks = of(TasksClass.tasksStorage);
    return tasks;
  }

  getAllSubTasks() {
    // return this.subListTask;
  }

  public saveTasks(id: number, task: string, week: number, checked: boolean) {
    TasksClass.tasksStorage.push(new TasksClass(id, task, week, checked))
  }

  public saveSubTasks(id: number, task: string, week: number, checked: boolean) {
    TasksClass.subTasksStorage.push(new TasksClass(id, task, week, checked));

  }

  getSubTask(id: number | string) {
    return this.getSubTasks().pipe(
      // (+) before `id` turns the string into a number
      map((tasks: TasksClass[]) => tasks.find(task => task.id === +id)!)
    );
  }

}
