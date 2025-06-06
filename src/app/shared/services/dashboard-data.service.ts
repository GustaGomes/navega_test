import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  constructor() {}

  getTotalContributions(): Observable<number> {
    return of(700000);
  }

  getMonthlyContribution(): Observable<{ amount: number; percentage: number }> {
    return of({ amount: 200000, percentage: 5 });
  }

  getVoluntaryContribution(): Observable<number> {
    return of(500000);
  }

  getPieChartData(): Observable<{ labels: string[]; data: number[] }> {
    return of({
      labels: ['Contribuição mensal', 'Contribuição voluntária'],
      data: [200000, 500000],
    });
  }
}
