import { Component, OnInit } from '@angular/core';
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
  user: {};
  taskUrl = 'https://stefanbode.nl/api/task';

  constructor(private http: HttpClient, private userService: UserService) {
      this.user = {};
  }

  ngOnInit() {
      this.user = this.userService.getUser();
      console.log(this.user);

      this.getTasks();
  }

  getTasks() {
      this.tasks = [];
      this.http.get(this.taskUrl + '/read_by_family.php?family_id=1').subscribe(data => {
          this.tasks = data["records"];
      });
  }

  addTask(task_name: string) {
    this.http.get(this.taskUrl + '/create.php?task=' + task_name + '&family_id=1').subscribe(data => {
        this.getTasks();
    });
  }

  deleteTask(taskId: number) {
      this.http.get(this.taskUrl + '/delete.php?task_id=' + taskId).subscribe(data => {
          this.getTasks();
      });
  }
}