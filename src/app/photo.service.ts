import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Photo } from './photo';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class PhotoService {
    photos : Photo[];
    photoUrl = 'https://stefanbode.nl/api/photo';

    constructor(private http: HttpClient) { }

    readPhotos() {
        return this.http.get(this.photoUrl + '/read.php').subscribe(data => {
            this.photos = data["records"];
            console.log(this.photos);
            return this.photos;
        });
    }
}
