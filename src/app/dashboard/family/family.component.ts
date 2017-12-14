import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
    users;
    familyUrl = 'https://stefanbode.nl/api/user';

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
      this.getFamilyMembers();
    }

    getFamilyMembers() {
        this.http.get(this.familyUrl + '/read_by_family.php?family_id=1').subscribe(data => {
            this.users = data["records"];
        });
    }

}
