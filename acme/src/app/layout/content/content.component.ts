import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  chart!: Chart;
  chart2!: Chart;
  data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [15, 11, 15, 18, 14, 23],
  };
  data2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [17, 10, 16, 19, 12, 21],
  };
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
  // data2: { labels: []; data: [] };
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
