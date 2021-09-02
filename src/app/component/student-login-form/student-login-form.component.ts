import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'student-login-form',
  templateUrl: './student-login-form.component.html',
  styleUrls: ['./student-login-form.component.css'],
})
export class StudentLoginFormComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private studentService: StudentService,
    private router: Router
  ) {}

  //Member Variables
  authDetails$: any;

  disable = true;

  studLoginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginStudent() {
    const { userName, password } = this.studLoginForm.value;

    this.studentService.authenticateStudent(userName, password).subscribe(
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
    if (this.authDetails$.valid) {
      //Info needed to restrict user from navigating in application without login
      localStorage.setItem('userType', 'student');
      localStorage.setItem('userName', this.authDetails$?.userName);
      localStorage.setItem('userId', this.authDetails$?.studId);

      //Load and Navigate to Student Module
      this.router.navigate(['/student']);
      console.log('test');
    } else {
      this.openSnackBar('Login Failed! Incorrect Credentials');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
