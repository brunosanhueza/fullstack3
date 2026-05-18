import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minLength } from '@angular/forms/signals';
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
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.component.css',
})

export class Register implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nameUser: ['', [Validators.required, Validators.minLength(3)]], //fsajfakja
      emailUser: ['', [Validators.required, Validators.email, validadorDominioCorreo()]], 
      passwordUser: ['', [Validators.required, Validators.minLength(6)]],
      phoneUser: ['', [Validators.required, Validators.maxLength(9),Validators.minLength(9)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Usuario registrado:', this.registerForm.value);
      this.router.navigate(['/dashboard']);
    }
  }
}