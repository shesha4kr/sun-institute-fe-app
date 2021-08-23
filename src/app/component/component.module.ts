import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailExamComponent } from './detail-exam/detail-exam.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CircleChartComponent } from './circle-chart/circle-chart.component';

@NgModule({
  declarations: [DetailExamComponent, CircleChartComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({}),
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [DetailExamComponent, CircleChartComponent],
})
export class ComponentModule {}
