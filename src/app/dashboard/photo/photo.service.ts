import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';

import { Photo } from './photo';

@Injectable()
export class PhotoService {

    results: string[];
    private photoUrl = 'https://stefanbode.nl/api/photo/read.php';

    constructor(private http: HttpClient) { }

    /** GET photos from the server */
    getPhotos() {
        this.http.get(this.photoUrl).subscribe(data => {
            // Read the result field from the JSON response.
            console.log(data['results']);
            return data['results'];
        });
    }
}