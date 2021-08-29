import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchExamsByUsernameService {
  constructor(private httpClient: HttpClient) {}

  fetchLatestExamsByUserId(studId = 0): Observable<object> {
    const url = `http://localhost:8080/student/exam/${studId}`;
    return this.httpClient.get(url);
  }

  fetchAllExams(studId = 0): Observable<object> {
    const url = `http://localhost:8080/student/exams/${studId}`;
    return this.httpClient.get(url);
  }
}
