import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  pieChartType: ChartType = 'doughnut';

  pieChartData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Contribuição mensal', 'Contribuição voluntária'],
    datasets: [
      {
        data: [500000, 500000],
        backgroundColor: ['#F44336', '#3F51B5'],
      },
    ],
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
