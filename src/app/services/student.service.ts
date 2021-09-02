import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  authenticateStudent(userName: string, password: string): Observable<object> {
    return this.httpClient.post('http://localhost:8080/login/student', { userName, password });
  }

  fetchLatestExamsByUserId(studId = 0): Observable<object> {
    const url = `http://localhost:8080/student/exam/${studId}`;
    return this.httpClient.get(url);
  }

  fetchAllExams(studId = 0): Observable<object> {
    const url = `http://localhost:8080/student/exams/${studId}`;
    return this.httpClient.get(url);
  }

  fetchStudentProfile(studId = 0): Observable<object> {
    const url = `http://localhost:8080/student/profile/${studId}`;
    return this.httpClient.get(url);
  }

  updateStudentPofile(studId = 0, newProfile: any): Observable<object> {
    const url = `http://localhost:8080/student/profile/${studId}`;
    return this.httpClient.put(url, newProfile);
  }

  validatePassword( studId = 0, password = '', newPassword = ''): Observable<object> {
    const url = `http://localhost:8080/student/${studId}`;
    return this.httpClient.put(url, { password, newPassword });
  }
}
