import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthStudentService } from 'src/app/services/auth-student.service';

@Component({
  selector: 'student-login-form',
  templateUrl: './student-login-form.component.html',
  styleUrls: ['./student-login-form.component.css'],
})
export class StudentLoginFormComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private authStudentService: AuthStudentService
  ) {}

  //Member Variables
  authFailed = false;

  studLoginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginStudent() {
    const { userName, password } = this.studLoginForm.value;
    console.log("Logged In Value before service call:"+localStorage.getItem('isLoggedIn'));
    console.log("Logged In Value before service call:"+localStorage.getItem('isLoggedIn'));
    
    this.authStudentService.authenticateStudent(userName, password);

    console.log("Logged In Value after service call:"+localStorage.getItem('isLoggedIn'));


    this.authFailed =
      localStorage.getItem('isLoggedIn') === 'yes' ? true : false;

    // Open snack bar if authFailed is true
    this.authFailed && this.openSnackBar('Login Failed! Incorrect Credentials');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
