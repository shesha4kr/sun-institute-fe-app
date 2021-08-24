import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchExamsByUsernameService {
  constructor(private httpClient: HttpClient) {}

  allExams: any;

  getAllExams(userName: string): any {
    const url = `http://localhost:8080/student/${userName}`;
    return this.httpClient.get(url);
  }
}
