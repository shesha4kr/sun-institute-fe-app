import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css'],
})
export class CircleChartComponent implements OnInit {
  @Input() percentage = 110;
  radius = 90;

  constructor() {}

  ngOnInit(): void {}
}
