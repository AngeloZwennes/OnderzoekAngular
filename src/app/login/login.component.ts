import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    name: string;
    email: string;
    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
    }

    login() {
        this.userService.logIn(this.email);
        this.router.navigateByUrl('/dashboard');
    }
}
