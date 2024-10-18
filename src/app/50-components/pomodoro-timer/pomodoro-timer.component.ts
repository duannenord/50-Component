import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.css'
})
export class PomodoroTimerComponent {
  workDuration: number = 25; 
  breakDuration: number = 5; 
  totalTime: number = this.workDuration * 60; 
  minutes: number = this.workDuration;
  seconds: number = 0;
  isRunning: boolean = false;
  timer: any;

  startTimer() {
    this.isRunning = true;
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.toggleSession();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.minutes = this.workDuration;
    this.seconds = 0;
  }

  toggleSession() {
    this.stopTimer();
    if (this.minutes === this.workDuration) {
      this.minutes = this.breakDuration;
    } else {
      this.minutes = this.workDuration;
    }
    this.seconds = 0;
    this.startTimer();
  }
}

