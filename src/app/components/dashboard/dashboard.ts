import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink],
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
