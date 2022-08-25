import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  chart!: Chart;
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {}
}
