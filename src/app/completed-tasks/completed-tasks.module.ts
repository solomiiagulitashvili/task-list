import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './completed-tasks.component';
import { TaskItemComponent } from '../tasks/task-item/task-item.component';

@NgModule({
  declarations: [CompletedTasksComponent, TaskItemComponent],
  imports: [CommonModule],
  exports: [CompletedTasksComponent],
})
export class CompletedTasksModule {}
