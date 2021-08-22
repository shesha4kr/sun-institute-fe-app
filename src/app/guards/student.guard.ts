import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad() {
    if (localStorage.getItem('userType') === 'student') {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
