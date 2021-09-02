import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FetchExamsByUsernameService } from 'src/app/services/fetch-exams-by-username.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  form = new FormGroup({
    _password: new FormControl('', Validators.required),
    _newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    _reenteredPassword: new FormControl('', [Validators.required]),
  });

  errorMessage = '';
  userId = parseInt(localStorage.getItem('userId')!);
  response$: any;

  constructor(
    private studentService: FetchExamsByUsernameService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onChange() {
    const currentPassword = this.form.get('_reenteredPassword')?.value;
    const password = this.form.get('_newPassword')?.value;

    if (currentPassword !== password) {
      this.errorMessage = 'Entered Passwords do not match';
    } else {
      this.errorMessage = '';
    }
  }

  changePassword() {
    //call function and fetch password
    const password = this.form.get('_password')?.value;
    const newPassword = this.form.get('_newPassword')?.value;
    const renteredPassword = this.form.get('_reenteredPassword')?.value;
    if (newPassword === renteredPassword) {
      this.studentService
        .validatePassword(this.userId, password, newPassword)
        .subscribe(
          (response) => {
            this.response$ = response;
            if (this.response$?.message === 'success') {
              this.openSnackBar('Password changed successfully!', 'Ok');
              this.router.navigate(['']);
            } else {
              this.openSnackBar('Password entered is incorrect!', 'Retry');
            }
          },
          (error) => {
            console.error(
              'Something Went Wrong with validate password service:' + error
            );
            this.openSnackBar('Something went wrong!', 'Ok');
          }
        );
    }
  }

  openSnackBar(message: string, button: string) {
    this._snackBar.open(message, button, { duration: 4000 });
  }
}
