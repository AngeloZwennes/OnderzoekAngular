import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {isNull} from 'util';

@Injectable()
export class UserService {
    email: string;
    name: string;
    user;
    private usernameUrl = 'www.stefanbode.nl/api/user';

    constructor(private http: HttpClient, private router: Router) {
    }

    getUser() {
        return this.user;
    }

    getLocalEmail() {
        return this.email;
    }

    fetchLocalUser() {
        this.email = localStorage.getItem('email');
        return this.email;
    }

    createUser() {
        this.http.get('https://stefanbode.nl/api/user/create.php?username=' + this.name + '&password=test&email=' + this.email).subscribe
        (
            data => {
                this.fetchUserFromDB();
            }
        );
    }

    fetchUserFromDB() {
        this.http.get('http://stefanbode.nl/api/user/read_one.php?email=' + this.email).subscribe
        (data => {
                this.user = data;
                if (isNull(this.user.user_id)) {
                    // there is no user in the DB, create the user
                    this.createUser();
                    this.router.navigateByUrl('/dashboard');
                } else {
                    // there is a user in the DB, navigate to the dashboard
                    return this.user;
                }
            }
        );
        return this.user;
    }

    logIn(email: string, name: string) {
        this.email = email;
        this.name = name;
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        this.fetchUserFromDB();
    }

    logOut() {
        localStorage.clear();
        this.email = undefined;
    }
}
