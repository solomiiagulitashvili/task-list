import { Injectable, Input } from '@angular/core';
import { ITask } from '../interfaces/task-interface';
import { BehaviorSubject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  @Input() id: string;

  private tasksSubject = new BehaviorSubject<ITask[]>(this.getTasks());
  tasks$: Observable<ITask[]> = this.tasksSubject.asObservable();
  localTasks: ITask[];

  ngOnInit() {
    this.tasks$.subscribe();
  }

  onAddTask(task: ITask) {
    this.localTasks = this.getTasks();
    this.localTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.localTasks));
    this.tasksSubject.next(this.localTasks);
  }

  getTasks() {
    let existantTasks = JSON.parse(localStorage.getItem('tasks'));
    if (existantTasks) {
      return existantTasks;
    } else return [];
  }

  onAddProgress(id) {
    this.localTasks = this.getTasks();
    let myTask = this.localTasks.find((task) => {
      return task.id === id;
    });
    if (myTask.progress >= 100) {
      return;
    }
    myTask.progress = myTask.progress + 10;
    if (myTask.progress >= 100) {
      myTask.completed = true;
    }
    localStorage.setItem('tasks', JSON.stringify(this.localTasks));
    this.tasksSubject.next(this.localTasks);
  }

  onRemoveProgress(id) {
    this.localTasks = this.getTasks();
    let myTask = this.localTasks.find((task) => {
      return task.id === id;
    });
    if (myTask.progress <= 0) {
      return;
    }
    myTask.progress = myTask.progress - 10;
    if (myTask.progress >= 100) {
      myTask.completed = true;
    }
    localStorage.setItem('tasks', JSON.stringify(this.localTasks));
    this.tasksSubject.next(this.localTasks);
  }

  onDeleteTask(id) {
    this.localTasks = this.getTasks();
    console.log(this.localTasks);
    console.log(id);
    let deleted = this.localTasks.filter((task) => {
      return task.id !== id;
    });
    console.log(deleted);
    localStorage.setItem('tasks', JSON.stringify(deleted));
    this.tasksSubject.next(deleted);
  }
}
