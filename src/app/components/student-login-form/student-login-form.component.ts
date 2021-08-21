import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'student-login-form',
  templateUrl: './student-login-form.component.html',
  styleUrls: ['./student-login-form.component.css'],
})
export class StudentLoginFormComponent implements OnInit {
  authFailed = false;

  studLoginForm = new FormGroup({
    studId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private _snackBar: MatSnackBar) {}

  loginStudent() {
    const { studId, password } = this.studLoginForm.value;

    this.authFailed = true;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
