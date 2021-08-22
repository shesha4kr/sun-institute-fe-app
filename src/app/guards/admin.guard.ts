import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad() {
    if (localStorage.getItem('userType') === 'admin') {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
