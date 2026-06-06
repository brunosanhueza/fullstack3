import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const DOMINIOS_PERMITIDOS = ['gmail.com','hotmail.com','outlook.com'];

export function validadorDominioCorreo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const emailUser = control.value;

    if (!emailUser) return null; //Si el espacio del campo de "correo electronico" esta vacio, el "validators.required" hara el trabajo de avisar que falta el correo.

    const arrobaIndex = emailUser.lastIndexOf('@');

    if (arrobaIndex === -1 || arrobaIndex === emailUser.length - 1) {
      return null;
    }

    const dominio = emailUser.substring(arrobaIndex + 1).trim().toLowerCase();

    const coincidenciaParcial = DOMINIOS_PERMITIDOS.some(d => d.startsWith(dominio));

    const esValido = DOMINIOS_PERMITIDOS.includes(dominio);

    if (esValido) {
      return null;
    }

    if (!coincidenciaParcial) {
      return { dominioInvalido: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailUser: ['', [Validators.required, Validators.email, validadorDominioCorreo()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }
  }

  ingresoInvitado(): void {
    console.log('Ingresando como invitado');
    this.router.navigate(['/dashboard']);
  }
}
