import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskItemModule } from './task-item/task-item.module';
import { ButtonModule } from 'primeng/button';
import { FilterByCategoryPipe } from '../pipes/filterByCategory.pipe';

@NgModule({
  declarations: [TasksComponent, FilterByCategoryPipe],
  imports: [CommonModule, TaskItemModule, ButtonModule],
  exports: [TasksComponent],
})
export class TasksModule {}
