import { Injectable } from '@angular/core';
import { CalendarItem } from './calendarItem';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class CalendarService {

  constructor(private http: HttpClient, private router: Router) {
  }
  agedaItems: CalendarItem = new CalendarItem;
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

  getItemsForUser(input: string){
    this.http.get('https://stefanbode.nl/api/agenda/read_by_user.php?user_id='+ input).subscribe
  (
    data => {
      this.agedaItems.name = data["records"][0]['title'];
      this.agedaItems.description = data["records"][0]['description'];
      this.agedaItems.start = new Date(data["records"][0]['start_date'].replace(/\ /gi, "T"));
      this.agedaItems.end = new Date(data["records"][0]['end_date'].replace(/\ /gi, "T"));
      this.agedaItems.member = +data["records"][0]['creator']; 
      return this.agedaItems;     
    }
  );
  }

}
