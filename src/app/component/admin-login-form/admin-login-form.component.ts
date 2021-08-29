import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css'],
})
export class AdminLoginFormComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  authFailed = false;

  adminLoginForm = new FormGroup({
    adminId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginAdmin() {
    const { adminId, password } = this.adminLoginForm.value;

    if (adminId === 'admin' && password === 'admin') {
      localStorage.setItem('userType', 'admin');
      this.router.navigate(['/admin']);
    } else {
      this.authFailed = true;
      this.openSnackBar('Login Failed! Incorrect Credentials');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Retry');
  }

  ngOnInit(): void {}
}
