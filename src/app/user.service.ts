import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    email: string;

    constructor() {
    }

    getUser() {
        return this.email;
    }

    fetchUser() {
        this.email = localStorage.getItem('email');
    }

    logIn(email: string) {
        this.email = email;
        localStorage.setItem('email', email);
    }

    logOut() {
        localStorage.clear();
        this.email = undefined;
    }
}
