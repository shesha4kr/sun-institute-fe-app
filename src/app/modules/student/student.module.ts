import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { NgCircleProgressModule } from 'ng-circle-progress';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { ComponentModule } from 'src/app/component/component.module';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentComponent, EditProfilePageComponent],
  imports: [
    CommonModule,
    ComponentModule,
    StudentRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [EditProfilePageComponent],
})
export class StudentModule {}
