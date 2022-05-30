import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TasksBaseService } from '../tasks-base.service';
import { TimerService } from '../timer.service';

import { TasksClass } from '../tasks';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.css'],
})
export class SubTasksComponent implements OnInit {

  id: number = 1;
  subListTask: TasksClass[] = [];
  task: string = "";
  weeks: string = "";

  constructor(
    private tb: TasksBaseService,
    public ts: TimerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  saveTasks() {
    let num = parseInt(this.weeks);
    this.task ? this.tb.saveSubTasks(this.id, this.task, num, false) : '';
    this.task ? this.id++ : this.id
    this.task = "";
    this.weeks = "";
  }

  getAllSubTasks() {
    return this.subListTask = TasksClass.subTasksStorage
  }

  gotoTasksList() {
    this.router.navigate(['/tasks']);
  }

  ngOnInit(): void {

  }

}
