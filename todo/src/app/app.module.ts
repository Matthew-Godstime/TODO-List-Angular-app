import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SubTasksComponent } from './sub-tasks/sub-tasks.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'sub-task/:id', component: SubTasksComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SubTasksComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
