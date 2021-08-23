import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// This service is to authenticate student
@Injectable({
  providedIn: 'root',
})
export class AuthStudentService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  //Member Variables
  authDetails: any;
  

  authenticateStudent(userName: string, password: string) {
    this.httpClient
      .post('http://localhost:8080/login/student', { userName, password })
      .subscribe((data) => {
        this.authDetails = data;
        this.updateLocalStorage();
      });
  }

  updateLocalStorage() {
    if(this.authDetails.valid) {
          
        //Info needed to restrict user from navigating in application without login
        localStorage.setItem('isLoggedIn', 'yes');
        localStorage.setItem('userType', 'student');

        //Extra Info from BE
        localStorage.setItem('totalStuds', this.authDetails?.totalStudents);
        localStorage.setItem('totalStudsBehind', this.authDetails?.totalStudentsBehind);

        //Latest Mock Exam Details
        localStorage.setItem('latestExamDetails', JSON.stringify(this.authDetails?.latestTestDetails));

        //Student Details
        localStorage.setItem('studDetails', JSON.stringify(this.authDetails?.studDetails));
        
        //Load and Navigate to Student Module
        this.router.navigate(['/student']);

    }
  }
}
