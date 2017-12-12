import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from '../../task';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks : Task[];
  user;
  taskUrl = 'https://stefanbode.nl/api/task';

  constructor(private http: HttpClient, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.getTasks();
      this.user = this.userService.fetchUserFromDB();
      console.log(this.user);
  }

  openDialog() {
      this.dialog.open(TaskDialog, {});
  }

  getTasks() {
      this.http.get(this.taskUrl + '/read_by_family.php?family_id=1').subscribe(data => {
          this.tasks = data["records"];
      });
  }

  deleteTask(taskId: number) {
      this.http.get(this.taskUrl + '/delete.php?task_id=' + taskId).subscribe(data => {
          this.getTasks();
      });
  }
}

@Component({
    selector: 'dialog-task',
    templateUrl: 'task-dialog.html',
})
export class TaskDialog {
    task: string;
    taskUrl = 'https://stefanbode.nl/api/task';

    constructor(public dialogRef: MatDialogRef<TaskDialog>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) {}

    addTask() {
        this.http.get(this.taskUrl + '/create.php?task=' + this.task + '&family_id=1').subscribe(data => {
              this.dialogRef.close();
            }
        );
    }
}