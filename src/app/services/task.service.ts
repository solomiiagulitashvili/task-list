import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  onAddTask(task: ITask) {
    localStorage.setItem('tasks', JSON.stringify(task));
  }
}
