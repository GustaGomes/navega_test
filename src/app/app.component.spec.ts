import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IconService } from './shared/services/icon.service';

describe('AppComponent', () => {
  let iconServiceMock: Partial<IconService> & { registerIcons: jest.Mock };

  beforeEach(() => {
    iconServiceMock = {
      registerIcons: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: IconService, useValue: iconServiceMock }],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title "frontend-navega-test"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend-navega-test');
  });

  it('should call registerIcons on ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(iconServiceMock.registerIcons).toHaveBeenCalled();
  });
});
