import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { StudentGuard } from './guards/student.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule), canLoad:[StudentGuard]},
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canLoad:[AdminGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
