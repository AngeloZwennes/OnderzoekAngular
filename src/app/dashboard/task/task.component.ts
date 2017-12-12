import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
      this.dialog.open(TaskDialog, {});
  }

}

@Component({
    selector: 'dialog-task',
    templateUrl: 'task-dialog.html',
})
export class TaskDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}