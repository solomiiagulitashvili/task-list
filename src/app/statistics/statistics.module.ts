import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { StatisticsComponent } from '../statistics/statistics.component';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, ChartModule, ToastModule],
  exports: [StatisticsComponent],
})
export class StatisticsModule {}
