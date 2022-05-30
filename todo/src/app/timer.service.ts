import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  weekCounter: number = 0;
  dayCounter: number = 0;
  constructor() { }

  dayCount() {
    setInterval(() => {
      this.dayCounter++;
    }, 20000)
  }
  
  weekCount() {
    setInterval(() => {
      this.weekCounter++;
    }, 60000)
  }
}
