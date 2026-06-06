import { Routes } from '@angular/router';
import { Register } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { About } from './components/about/about';
import { VehiculoComponent } from './components/vehiculo-component/vehiculo-component';

export const routes: Routes = [
    {path: 'register', component: Register },
    {path: 'about', component: About},
    {path: 'login', component: Login },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'vehiculos', component: VehiculoComponent},
    {path: '', redirectTo: 'register', pathMatch: 'full' },
    {path: '**', redirectTo: 'register' }
];
