import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// This service is to authenticate student
@Injectable({
  providedIn: 'root',
})
export class AuthStudentService {
  authDetails: any;
  constructor(private httpClient: HttpClient) {}

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
        localStorage.setItem('isLoggedIn', this.authDetails.valid);
        localStorage.setItem('totalStuds', this.authDetails?.totalStudents);
        localStorage.setItem('totalStudsBehind', this.authDetails?.totalStudentsBehind);
        localStorage.setItem('logicalMarks', this.authDetails?.latestTestDetails.logicalMarks);
        localStorage.setItem('quantMarks', this.authDetails?.latestTestDetails.quantMarks);
        localStorage.setItem('gkMarks', this.authDetails?.latestTestDetails.gkMarks);
        localStorage.setItem('mockTest', this.authDetails?.latestTestDetails.mockTest);
        localStorage.setItem('dateOfExam', this.authDetails?.latestTestDetails.dateOfExam);
    } else {
        localStorage.setItem('isLoggedIn', this.authDetails.valid);
    }
  }
}
