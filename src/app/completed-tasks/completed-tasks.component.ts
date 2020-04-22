import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ICategory } from '../interfaces/category-interface';
import { ITask } from '../interfaces/task-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent {
  category: ICategory;
  completedTasks$: Observable<ITask[]> = this.taskService.tasks$;
  @Input() task: ITask;
  filterArg = { completed: 'true' };

  constructor(private taskService: TaskService) {}
}
