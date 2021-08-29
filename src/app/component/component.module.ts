import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailExamComponent } from './detail-exam/detail-exam.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { StudentLoginFormComponent } from './student-login-form/student-login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';

@NgModule({
  declarations: [
    DetailExamComponent,
    CircleChartComponent,
    AdminLoginFormComponent,
    StudentLoginFormComponent,
    LoginPageComponent,
    HeaderToolbarComponent,
    DetailExamComponent,
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({}),
    MatListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    DetailExamComponent,
    CircleChartComponent,
    AdminLoginFormComponent,
    StudentLoginFormComponent,
    LoginPageComponent,
    DetailExamComponent,
    HeaderToolbarComponent,
  ],
})
export class ComponentModule {}
