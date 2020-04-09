import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../interfaces/category-interface';
import { ITask } from '../interfaces/task-interface';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  category: ICategory;
  tasks$: Observable<ITask[]>;
  @Input() task: ITask;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$;
  }
}
