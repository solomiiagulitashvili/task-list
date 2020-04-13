import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './completed-tasks.component';
import { TaskItemModule } from '../tasks/task-item/task-item.module';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [CompletedTasksComponent, FilterPipe],
  imports: [CommonModule, TaskItemModule],
  exports: [CompletedTasksComponent],
})
export class CompletedTasksModule {}
