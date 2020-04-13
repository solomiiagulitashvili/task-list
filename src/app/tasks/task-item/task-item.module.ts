import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TaskItemComponent],
  imports: [CommonModule, ProgressBarModule, ButtonModule],
  exports: [TaskItemComponent],
})
export class TaskItemModule {}
