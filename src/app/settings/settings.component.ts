import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
    }

    logOut() {
        this.userService.logOut();
        this.router.navigateByUrl('/login');
    }
}
