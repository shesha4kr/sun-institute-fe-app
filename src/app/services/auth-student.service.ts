import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// This service is to authenticate student
@Injectable({
  providedIn: 'root',
})
export class AuthStudentService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  authenticateStudent(userName: string, password: string): Observable<object> {
    return this.httpClient.post('http://localhost:8080/login/student', 
    {
      userName,
      password,
    });
  }
}
