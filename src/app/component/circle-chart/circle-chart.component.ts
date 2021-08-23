import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css']
})
export class CircleChartComponent implements OnInit {

  @Input() radius = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
