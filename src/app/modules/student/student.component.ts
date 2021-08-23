import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studDetails: any;
  latestExamDetails: any;

  constructor() {}

  ngOnInit(): void {
    this.studDetails = JSON.parse(localStorage.getItem('studDetails')!);
    this.latestExamDetails = JSON.parse(
      localStorage.getItem('latestExamDetails')!
    );
  }
}
