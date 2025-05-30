import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // 👈 Importante!
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerMock: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule, // 👈 Adicionado!
        MatIconModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    routerMock = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com campos vazios', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

  it('deve alternar visibilidade da senha ao clicar no botão', () => {
    expect(component.hidePassword).toBe(true);
    component.togglePasswordVisibility();
    expect(component.hidePassword).toBe(false);
  });

  it('deve redirecionar ao dashboard se login válido', () => {
    component.loginForm.setValue({
      email: 'teste@teste.com',
      password: '123456',
    });
    component.onSubmit();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('deve mostrar alerta se usuário ou senha inválidos', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    component.loginForm.setValue({
      email: 'teste@teste.com',
      password: 'senhaErrada',
    });
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Usuário ou senha inválidos!');
  });
});
