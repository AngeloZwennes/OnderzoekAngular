import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
    photos: Photo[];

    constructor(private http: HttpClient, public dialog: MatDialog) { }

    openDialog() {
        this.dialog.open(PhotoDialog, {});
    }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos(): void {
        this.http.get('https://stefanbode.nl/api/photo/read.php').subscribe(data => {
            console.log(data.records);
            this.photos = data.records;
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
