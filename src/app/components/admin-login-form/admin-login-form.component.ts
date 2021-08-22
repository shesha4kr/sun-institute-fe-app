import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css'],
})
export class AdminLoginFormComponent implements OnInit {
  authFailed = false;

  adminLoginForm = new FormGroup({
    adminId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginAdmin() {
    const { adminId, password } = this.adminLoginForm.value;
    if (adminId === 'admin' && password === 'admin') {
      //load admin module
    } else {
      this.authFailed = true;
      this.openSnackBar('Login Failed! Incorrect Credentials');
    }
  }

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
