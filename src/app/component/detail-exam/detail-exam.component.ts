import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detail-exam',
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.css'],
})
export class DetailExamComponent implements OnInit {
  @Input() latestExamDetails: any;
  totalPercentage = 100;
  percentageForCircleChart = 110;

  constructor() {}

  ngOnInit(): void {
    this.totalPercentage =
      (this.latestExamDetails.logicalMarks +
        this.latestExamDetails.quantMarks +
        this.latestExamDetails.gkMarks) /
      300;

    this.percentageForCircleChart =
      (this.latestExamDetails.totalStudBehind /
        this.latestExamDetails.totalStudents) *
      100;
  }
}
