import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  weekCounter: number = 0;
  dayCounter: number = 0;
  constructor() { }

  // startTimer(timeLeft: number, checked: boolean) {
  //   this.weekCounter = timeLeft;
  //   let timmer = setInterval(() => {
  //     if (this.weekCounter !== 0) {
  //       this.weekCounter--;
  //       if (checked) {
  //         this.message = "WOW, Congratulations";
  //         clearInterval(timmer)
  //       }
  //     } else {
  //       this.message = "Sorry, You'll have better luck next time"
  //       clearInterval(timmer);
  //     }
  //   }, 1000)
  // }

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
