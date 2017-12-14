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
  viewAbleDate: string;

  previousDate(): void{
    this.date.setDate(this.date.getDate()-1);
    this.viewAbleDate = this.date.toDateString();
  }

  nextDate(): void{
    this.date.setDate(this.date.getDate() + 1);
    this.viewAbleDate = this.date.toDateString();
  }

  setToday(): void{
    this.date = new Date();;
    this.viewAbleDate = this.date.toDateString();
  }
  

    number = 0;

    ngOnInit() {
      this.viewAbleDate = this.date.toDateString();   
    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }
}
