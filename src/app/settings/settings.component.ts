import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    user: {};
    family: {};
    constructor(private router: Router, private userService: UserService) {
        this.user = {};
        this.family = {};
    }

    ngOnInit() {
        this.user = this.userService.getUser();
        this.family = this.userService.fetchFamilyFromDB();
    }

    logOut() {
        this.userService.logOut();
        this.router.navigateByUrl('/login');
    }

    log() {
        console.log(this.family);
    }
}
