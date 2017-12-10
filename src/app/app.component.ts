import {Component, OnInit} from '@angular/core';
import {isNull, isNullOrUndefined} from 'util';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }
    title = 'app';
    username: any;

    ngOnInit() {
        if (isNullOrUndefined(localStorage.getItem('username'))) {
            // there is no username available
            this.router.navigateByUrl('/login');
        } else {
            this.router.navigateByUrl('/dashboard');
            // there is a username available
        }
    }
}
