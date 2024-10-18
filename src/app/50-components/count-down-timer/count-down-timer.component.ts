import { Component } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrl: './count-down-timer.component.css'
})
export class CountDownTimerComponent {
  timeInput: number = 0; // Holds the user input for time
  remainingTime: number = 0; // Holds the remaining time
  private timerId: any; // Holds the interval id for the countdown

  startTimer(): void {
    if (this.timeInput > 0) {
      this.remainingTime = this.timeInput;
      clearInterval(this.timerId); // Clear any existing timer
      this.timerId = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          clearInterval(this.timerId); // Stop the timer once it reaches zero
        }
      }, 1000); // Update every second
    }
  }
}
