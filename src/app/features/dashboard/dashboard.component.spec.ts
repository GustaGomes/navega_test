import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { of } from 'rxjs';
import { DashboardDataService } from '../../shared/services/dashboard-data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // 👇 Mock do DashboardDataService
  const mockDashboardDataService = {
    getTotalContributions: () => of(1000),
    getMonthlyContribution: () =>
      of({
        amount: 500,
        percentage: 5,
      }),
    getVoluntaryContribution: () => of(500),
    getPieChartData: () =>
      of({
        data: [500, 500],
      }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        NgChartsModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: DashboardDataService,
          useValue: mockDashboardDataService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // 👈 para ignorar <app-header> e <app-sidebar>
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar dados mockados corretamente', () => {
    expect(component.totalContribution).toBe(1000);
    expect(component.monthlyContribution.amount).toBe(500);
    expect(component.monthlyContribution.percentage).toBe(5);
    expect(component.voluntaryContribution).toBe(500);
    expect(component.pieChartData.datasets![0].data).toEqual([500, 500]);
  });
});
