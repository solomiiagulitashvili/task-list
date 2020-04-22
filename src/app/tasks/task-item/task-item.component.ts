import { Component, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/task-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: ITask;
  @Output() id: string;
  constructor(private taskService: TaskService) {}

  onAddProgress(id) {
    this.taskService.onAddProgress(id);
  }

  onRemoveProgress(id) {
    this.taskService.onRemoveProgress(id);
  }

  onDeleteTask(id) {
    this.taskService.onDeleteTask(id);
  }
}
