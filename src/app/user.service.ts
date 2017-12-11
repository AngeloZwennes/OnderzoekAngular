import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    username: string;

    constructor() {
    }

    getUser() {
        return this.username;
    }

    fetchUser() {
        this.username = localStorage.getItem('username');
    }

    logIn(username: string) {
        this.username = username;
        localStorage.setItem('username', username);
    }

    logOut() {
        localStorage.clear();
        this.username = undefined;
    }
}
