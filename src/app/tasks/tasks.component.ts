import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../interfaces/task-interface';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<ITask[]>;
  @Input() task: ITask;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$;
  }
}
