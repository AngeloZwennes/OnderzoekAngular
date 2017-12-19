import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CalendarItem } from '../calendarItem';
import { UserService } from '../user.service';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {hmmm
  constructor(private userService: UserService, private calendarService: CalendarService) { }

  test: number = 0;
  date: Date = new Date();
  viewAbleDate: string;

  calenderAgendaItem: CalendarItem = new CalendarItem();

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
      console.log(this.calenderAgendaItem);
    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }

    createCalendarItem(){
     this.calenderAgendaItem.member = +this.userService.getUser_id();
     this.calenderAgendaItem.start_date = this.calenderAgendaItem.start.toString().replace(/\T/gi, " ");
     this.calenderAgendaItem.end_date = this.calenderAgendaItem.end.toString().replace(/\T/gi, " ");     
     this.calendarService.createAgendaItem(this.calenderAgendaItem);
     this.calenderAgendaItem = new CalendarItem();
    }
}
