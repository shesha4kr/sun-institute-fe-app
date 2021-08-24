import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamSummaryComponent } from './pages/exam-summary/exam-summary.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'exams', component: ExamSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
