import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (!localStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn') === 'no') {
      return true;
    }

    if (localStorage.getItem('userType') === 'admin') {
      this.router.navigate(['/admin']);
      return false;
    } else {
      this.router.navigate(['/student']);
      return false;
    }
  }
}
