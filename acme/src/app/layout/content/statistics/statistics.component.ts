import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chartjs
import { Chart, registerables } from '../../../../../node_modules/chart.js';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  chart!: Chart;
  data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [15, 11, 15, 18, 14, 23],
  };
  data2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [17, 10, 16, 19, 12, 21],
  };

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createNewChart();
  }
  createNewChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.data1.labels,
        datasets: [
          {
            label: 'Products sold',
            data: this.data1.data,
            backgroundColor: ['rgba(54, 162, 235, 0.7)'],
            borderColor: ['rgb(255, 99, 132)'],
            hoverBackgroundColor: ['rgba(255, 159, 64, 0.7)'],
            hoverBorderWidth: 1.5,
            borderWidth: 1,
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Total sales',
            data: this.data2.data,
            backgroundColor: ['rgba(54, 162, 235, 0.7)'],
            borderColor: ['rgb(255, 99, 132)'],
            hoverBackgroundColor: ['rgba(255, 159, 64, 0.7)'],
            hoverBorderWidth: 1.5,
            borderWidth: 1,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 4,
              boxHeight: 4,
              pointStyle: 'circle',
              usePointStyle: true,
            },
          },
        },
      },
    });
  }
}
