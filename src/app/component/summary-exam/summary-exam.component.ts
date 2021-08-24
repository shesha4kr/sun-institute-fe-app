import { Component, Input, OnInit } from '@angular/core';
import { FetchExamsByUsernameService } from 'src/app/services/fetch-exams-by-username.service';

@Component({
  selector: 'summary-exam',
  templateUrl: './summary-exam.component.html',
  styleUrls: ['./summary-exam.component.css'],
})
export class SummaryExamComponent implements OnInit {
  @Input() exam: any;
  title = 'Default Title';
  dateOfExam = '13-13-13';
  percentage = 1.1;
  mockTest = 'DEFAULT MOCK';
  radius = 50;

  constructor() {}

  ngOnInit(): void {
    this.mockTest = this.exam?.mockTest || this.mockTest;
    this.dateOfExam = this.exam?.dateOfExam || this.dateOfExam;
    this.percentage =
      (this.exam?.logicalMarks + this.exam?.quantMarks + this.exam?.gkMarks) /
        300 || this.percentage;
    this.title = `View Details of Exam ${this.mockTest}`;
  }
}
