import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    const matIconRegistryMock = {
      getDefaultFontSetClass: jest.fn().mockReturnValue(of('material-icons')),
      addSvgIcon: jest.fn(),
      addSvgIconSet: jest.fn(),
      addSvgIconLiteral: jest.fn(),
      addSvgIconSetLiteral: jest.fn(),
      addSvgIconInNamespace: jest.fn(),
      addSvgIconSetInNamespace: jest.fn(),
      getNamedSvgIcon: jest.fn().mockReturnValue(of(null)),
      getSvgIconFromUrl: jest.fn().mockReturnValue(of(null)),
    };

    const domSanitizerMock = {
      bypassSecurityTrustResourceUrl: jest.fn((url) => url),
    };

    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [MatIconModule, RouterTestingModule, NoopAnimationsModule],
      providers: [
        { provide: MatIconRegistry, useValue: matIconRegistryMock },
        { provide: DomSanitizer, useValue: domSanitizerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
