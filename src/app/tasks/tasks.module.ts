import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskItemModule } from './task-item/task-item.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TaskItemModule],
  exports: [TasksComponent],
})
export class TasksModule {}
