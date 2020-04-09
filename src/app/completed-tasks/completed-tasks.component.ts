import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ICategory } from '../interfaces/category-interface';
import { ITask } from '../interfaces/task-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTasksComponent implements OnInit {
  category: ICategory;
  completedTasks$: Observable<ITask[]>;
  @Input() task: ITask;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.completedTasks$ = this.taskService.tasks$.pipe(
      map((tasks) => {
        tasks.filter((task) => {
          return task.completed === true;
        });
        console.log(tasks);
        return tasks;
      })
    );
  }
}
