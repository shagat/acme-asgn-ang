import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  // data2: { labels: []; data: [] };
  constructor() {}

  ngOnInit(): void {}
  onResize(event: Event) {
    console.log(event.target);
  }
}
