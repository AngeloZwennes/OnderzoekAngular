import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {hmmm
  constructor() { }

  test: number = 0;
  date: Date = new Date();
  tempdate: Date;
  previousDate(): void{
    this.date.setDate(this.date.getDate()-1) 
    this.test = this.test -1;
    console.log(this.date);
  }

  nextDate(): void{
    this.date.setDate(this.date.getDate() + 1);
  }

    number = 0;

    ngOnInit() {

    }

    previousNumber(): void {
        this.number--;
    }

    nextNumber(): void {
        this.number++;
    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }
}
