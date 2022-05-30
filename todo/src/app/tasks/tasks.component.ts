import { Component, OnInit } from '@angular/core';

import { TasksBaseService } from '../tasks-base.service';
import {  TasksClass } from '../tasks';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {

  id: number = 1;
  listTask: TasksClass[] = [];
  task: string = "";
  weeks: string = "";
  
  constructor(
    private tb: TasksBaseService,
    public ts: TimerService
    ) { }

  saveTasks() {
    let num = parseInt(this.weeks);
    this.task ? this.tb.saveTasks(this.id, this.task, num, false) : '';
    this.task ? this.id++ : this.id
    this.task = "";
    this.weeks = "";
  }

  getAllTasks() {
    return this.listTask = TasksClass.tasksStorage;
  }

  ngOnInit(): void {
  }

}
