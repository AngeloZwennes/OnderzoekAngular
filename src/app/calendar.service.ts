import { Injectable } from '@angular/core';
import { CalendarItem } from './calendarItem';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class CalendarService {

  constructor(private http: HttpClient, private router: Router) {
  }

  createAgendaItem(input: CalendarItem) {
    this.http.get('https://stefanbode.nl/api/agenda/create.php?start_date='+ input.start_date 
                  + '&end_date=' + input.end_date 
                  + '&title=' + input.name 
                  + '&description=' + input.description
                  + '&creator=' + input.member 
                  + '&user_id=' + input.member ).subscribe
    (
        data => {
        }
    );
}

}
