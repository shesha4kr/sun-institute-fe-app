import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'profile', component: EditProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
