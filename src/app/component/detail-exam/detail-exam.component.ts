import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detail-exam',
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.css'],
})
export class DetailExamComponent implements OnInit {
  @Input() examDetails: any;
  totalPercentage = 100;
  percentageForCircleChart = 110;

  constructor() {}

  ngOnInit(): void {
    this.totalPercentage =
      (this.examDetails.logicalMarks +
        this.examDetails.quantMarks +
        this.examDetails.gkMarks) /
      300;

    this.percentageForCircleChart =
      (this.examDetails.totalStudBehind / this.examDetails.totalStudents) * 100;
  }
}
