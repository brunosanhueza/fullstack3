import { Routes } from '@angular/router';
import { Register } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path: 'register', component: Register },
    {path: 'login', component: Login },
    {path: 'dashboard', component: DashboardComponent },
    {path: '', redirectTo: 'register', pathMatch: 'full' },
    {path: '**', redirectTo: 'login' }
];
