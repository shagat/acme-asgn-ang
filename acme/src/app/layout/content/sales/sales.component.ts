import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  chart2!: Chart;

  data3 = {
    labels: ['France', 'Italy', 'Japan', 'Canada'],
    data: [4260, 3970, 4260, 3970],
  };
  chart_2_bgColor: string[] = [
    'rgba(142, 202, 230, 0.7)',
    'rgba(33, 158, 188, 0.7)',
    'rgba(2, 48, 71, 0.7)',
    'rgba(255, 183, 3, 0.7)',
    'rgba(251, 133, 0, 0.7)',
    'rgba(255, 0, 0, 0.7)',
  ];
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createNewChart();
  }
  createNewChart() {
    this.chart2 = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: this.data3.labels,
        datasets: [
          {
            label: 'Products sold',
            data: this.data3.data,
            backgroundColor: this.chart_2_bgColor,
            borderColor: ['rgb(255, 99, 132)'],
            hoverBackgroundColor: ['rgba(255, 159, 64, 0.7)'],
            hoverBorderWidth: 1.5,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 6,
              boxHeight: 6,
              pointStyle: 'circle',
              usePointStyle: true,
            },
          },
        },
      },
    });
  }
}
