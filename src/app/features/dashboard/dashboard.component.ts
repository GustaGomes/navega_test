import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { DashboardDataService } from '../../shared/services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  totalContribution: number = 0;
  monthlyContribution = { amount: 0, percentage: 0 };
  voluntaryContribution: number = 0;

  pieChartType: ChartType = 'doughnut';
  pieChartData: ChartData<'doughnut', number[], string | string[]> = {
    datasets: [],
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  constructor(private dashboardData: DashboardDataService) {}

  ngOnInit(): void {
    this.dashboardData.getTotalContributions().subscribe((total) => {
      this.totalContribution = total;
    });

    this.dashboardData.getMonthlyContribution().subscribe((data) => {
      this.monthlyContribution = data;
    });

    this.dashboardData.getVoluntaryContribution().subscribe((data) => {
      this.voluntaryContribution = data;
    });

    this.dashboardData.getPieChartData().subscribe((chart) => {
      this.pieChartData = {
        // labels: chart.labels,
        datasets: [
          {
            data: chart.data,
            backgroundColor: ['#e22e6f', '#594cbe'],
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      };
    });
  }
}
