import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthStudentService } from 'src/app/services/auth-student.service';

@Component({
  selector: 'student-login-form',
  templateUrl: './student-login-form.component.html',
  styleUrls: ['./student-login-form.component.css'],
})
export class StudentLoginFormComponent implements OnInit {
  authFailed = false;

  studLoginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private _snackBar: MatSnackBar,
    private authStudentService: AuthStudentService
  ) {}

  loginStudent() {
    const { userName, password } = this.studLoginForm.value;
    this.authStudentService.authenticateStudent(userName, password);

    this.authFailed = localStorage.getItem('isLoggedIn') === 'true' ? false : true;
    this.authFailed && this.openSnackBar('Login Failed! Incorrect Credentials');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
