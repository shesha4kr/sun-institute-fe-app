import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detail-exam',
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.css'],
})
export class DetailExamComponent implements OnInit {
  @Input() studDetails: any;
  @Input() latestExamDetails: any;
  @Input() title = 'Default Title';
  radius = 90;

  constructor() {}

  ngOnInit(): void {}
}
