import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock-custom.component.html',
  styleUrl: './clock-custom.component.css'
})
export class ClockCustomComponent implements OnInit, OnChanges, OnDestroy {
  currentTime = signal<string>('00:00:00');
  timer: any;

  @Input() currentTimeObj: any;

  ngOnInit(): void {
    if(Object.keys(this.currentTimeObj).length == 0) {
      this.currentTimeObj.utc_offset = this.getCurrentUTCOffset();
    }
    this.getTimeFromObj();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes['currentTimeObj']['currentValue']).length > 0) {
      this.getTimeFromObj();
    }
  }

  getCurrentUTCOffset() {
    // Get current date
    const currentDate = new Date();
    // Get current UTC offset in minutes
    const utcOffsetMinutes = currentDate.getTimezoneOffset();
    // Convert minutes to hours and minutes
    const hours = Math.floor(Math.abs(utcOffsetMinutes) / 60);
    const minutes = Math.abs(utcOffsetMinutes) % 60;
    // Determine if the offset is positive or negative
    const sign = utcOffsetMinutes > 0 ? '-' : '+';
    // Display the UTC offset
    const formattedUtcOffset = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    return formattedUtcOffset;
  }

  // For getting current time string
  getTimeFromObj() {
    this.pause();
    this.currentTime.set(this.getCurrentFromWithOffset(this.currentTimeObj.utc_offset));
    this.start();
  }

  // Getting current time with offset
  getCurrentFromWithOffset(utcOffset: string) {
    // Split the UTC offset into hours and minutes
    const [hoursString, minutesString] = utcOffset.split(':');
    const currentUTCOffset = new Date().getTimezoneOffset() * 60 * 1000;

    // Parse hours and minutes as integers
    const hours = parseInt(hoursString, 10);
    const minutes = parseInt(minutesString, 10);

    // Calculate the total offset in minutes, including the sign
    const totalOffset = (hours * 60) + (minutes);

    // Get the current UTC time
    const utcNow = new Date();

    // Calculate the local time by applying the UTC offset in minutes
    const localTime = new Date((utcNow.getTime() + currentUTCOffset) + (totalOffset * 60 * 1000));

    // Format the local time as HH:mm:ss
    const formattedTime = `${this.padTime(localTime.getHours())}:${this.padTime(localTime.getMinutes())}:${this.padTime(localTime.getSeconds())}`;

    return formattedTime;
  }

  // Helper function to pad single-digit values with a leading zero
  padTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  // For handling start and stop
  startStopWatch() {
    if (!this.timer) {
      this.start();
    }
    else {
      this.pause();
    }
  }

  // Start clock
  start() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  // Pause clock
  pause() {
    clearInterval(this.timer);
    this.timer = null;
  }

  // For updating time
  updateTime() {
    let timeParts = this.currentTime().split(':');
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1], 10);
    let seconds = parseInt(timeParts[2], 10);
    seconds += 1;
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
      if (minutes == 60) {
        hours += 1;
        minutes = 0;
        if (hours == 24) {
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
      }
    }
    this.currentTime.set(`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`); // Setting current time here
  }

  // Killing the process on component destroy
  ngOnDestroy(): void {
    this.pause();
  }

}
