import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minLength } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';

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
      emailUser: ['', [Validators.required, Validators.email]], 
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