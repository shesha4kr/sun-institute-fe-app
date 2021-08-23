import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    ComponentModule,
    StudentRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 90,
    }),
  ],
})
export class StudentModule {}
