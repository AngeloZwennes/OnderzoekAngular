import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    email: string;
    private usernameUrl = 'www.stefanbode.nl/api/user';

    constructor(private http: HttpClient) {
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
