import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TasksComponent, TaskItemComponent],
  imports: [CommonModule, ProgressBarModule, ButtonModule],
  exports: [TasksComponent],
})
export class TasksModule {}
