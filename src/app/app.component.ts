import {Component, OnInit} from '@angular/core';
import {isNull, isNullOrUndefined} from 'util';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private userService: UserService) {
    }
    title = 'app';
    username: any;

    ngOnInit() {
        this.userService.fetchLocalUser();
        if (isNullOrUndefined(this.userService.getLocalEmail())) {
            // there is no username available
            this.router.navigateByUrl('/login');
        } else {
            // there is a local user, fetch database info for that local user
            this.userService.fetchUserFromDB();
            this.router.navigateByUrl('/dashboard');
        }
    }
}
