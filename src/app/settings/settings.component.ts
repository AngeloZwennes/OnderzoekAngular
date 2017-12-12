import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    user;
    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        this.user = this.userService.fetchUserFromDB();
        console.log(this.user);
    }

    logOut() {
        this.userService.logOut();
        this.router.navigateByUrl('/login');
    }
}
