import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
    constructor() {
    }

    date: Date = new Date();
    number = 0;
    tempdate: Date;

    ngOnInit() {

    }

    previousNumber(): void {
        this.number--;
    }

    nextNumber(): void {
        this.number++;
    }

    previousDate(): void {
        this.date.setDate(this.date.getDate() - 1);
        console.log(this.date);
    }

    nextDate(): void {
        this.date.setDate(this.date.getDate() + 1);
    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }
}
