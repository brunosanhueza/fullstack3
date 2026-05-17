import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent {

  constructor(private router: Router) { }
  
    logout(): void {
      localStorage.removeItem('token');
      this.router.navigate(['/register']);
  }
}
