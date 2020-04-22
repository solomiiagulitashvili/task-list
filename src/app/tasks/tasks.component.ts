import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../interfaces/task-interface';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category-interface';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<ITask[]> = this.taskService.tasks$;
  categories$: Observable<ICategory[]> = this.categoriesService.categories$;
  filteredTasks: ITask[];
  @Input() task: ITask;
  @Input() category: ICategory;
  Category: boolean;
  all: boolean;
  id: boolean;

  constructor(
    private taskService: TaskService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.Category = false;
    this.all = false;
    this.id = false;
  }

  showAll() {
    this.Category = false;
    this.all = true;
  }
  showByCategory() {
    this.Category = true;
    this.all = false;
  }
  filterTasks(id) {
    this.id = id;
  }
}
