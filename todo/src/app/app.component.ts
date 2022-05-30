import { Component } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Stime's TODO List App";
  constructor(public ts: TimerService) { ts.dayCount(); ts.weekCount(); }
  
}
