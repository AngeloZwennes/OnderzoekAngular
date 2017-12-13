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
        });
    }
}

@Component({
    selector: 'dialog-photo',
    templateUrl: 'photo-dialog.html',
})
export class PhotoDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    fileChanged(e: Event) {
        var target: HTMLInputElement = e.target as HTMLInputElement;
        for(var i=0;i < target.files.length; i++) {
            this.upload(target.files[i]);
        }
    }

    upload(img: File) {
        var formData: FormData = new FormData();
        formData.append("image", img, img.name);

        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
            //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
        });
        xhr.open("PUT", "assets/images/", true);
        xhr.send(formData);
    }
}
