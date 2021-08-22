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
    console.log('VALUE0:' + localStorage.getItem('isLoggedIn'));

    this.authStudentService.authenticateStudent(userName, password);

    setTimeout(()=>{
      console.log('VALUE3:' + localStorage.getItem('isLoggedIn'));

      this.authFailed = localStorage.length > 0 ? false : true;

      // Open snack bar if authFailed is true
      this.authFailed && this.openSnackBar('Login Failed! Incorrect Credentials');
    },1000);

  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
