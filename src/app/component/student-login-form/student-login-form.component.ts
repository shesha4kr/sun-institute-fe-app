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
    private authStudentService: AuthStudentService,
    private router: Router
  ) {}

  //Member Variables
  authFailed = false;
  authDetails$: any;

  studLoginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginStudent() {
    const { userName, password } = this.studLoginForm.value;

    this.authStudentService.authenticateStudent(userName, password).subscribe(
      (response) => {
        this.authDetails$ = response;
        this.handleResponse();
      },
      (error) => {
        this.openSnackBar('Something Went Wrong!');
      }
    );
  }

  handleResponse() {
    console.log('DETAILS:' + this.authDetails$);
    if (this.authDetails$.valid) {
      //Info needed to restrict user from navigating in application without login
      localStorage.setItem('userType', 'student');

      //Extra Info from BE
      localStorage.setItem('totalStuds', this.authDetails$?.totalStudents);
      localStorage.setItem(
        'totalStudsBehind',
        this.authDetails$?.totalStudentsBehind
      );

      //Latest Mock Exam Details
      localStorage.setItem(
        'latestExamDetails',
        JSON.stringify(this.authDetails$?.latestTestDetails)
      );

      //Student Details
      localStorage.setItem(
        'studDetails',
        JSON.stringify(this.authDetails$?.studDetails)
      );

      //Load and Navigate to Student Module
      this.router.navigate(['/student']);
    } else {
      this.openSnackBar('Login Failed! Incorrect Credentials');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
