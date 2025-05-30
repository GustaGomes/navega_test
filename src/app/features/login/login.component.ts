import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  loginForm: FormGroup;

  // Usuário mockado para validação
  private userMock = {
    email: 'teste@teste.com',
    cpf: '12345678900',
    password: '123456',
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Verificação se é email ou CPF
      const isEmailValid = email === this.userMock.email;
      const isCpfValid = email === this.userMock.cpf;
      const isPasswordValid = password === this.userMock.password;

      if ((isEmailValid || isCpfValid) && isPasswordValid) {
        console.log('Login bem-sucedido! Redirecionando para o dashboard...');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Usuário ou senha inválidos!');
      }
    } else {
      console.log('Formulário inválido');
    }
  }
}
