import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('userType')) {
      if (localStorage.getItem('userType') === 'admin') {
        this.router.navigate(['/admin']);
        return false;
      } else {
        this.router.navigate(['/student']);
        return false;
      }
    }
    return true;
  }
}
