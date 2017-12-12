import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Photo } from '../../photo';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
    photos : Photo[];
    photoUrl = 'https://stefanbode.nl/api/photo';
    
    constructor(private http: HttpClient, public dialog: MatDialog) {
    }

    openDialog() {
        this.dialog.open(PhotoDialog, {});
    }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.http.get(this.photoUrl + '/read.php').subscribe(data => {
            this.photos = data["records"];
            console.log(this.photos);
        });
    }
}

@Component({
    selector: 'dialog-photo',
    templateUrl: 'photo-dialog.html',
})
export class PhotoDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
