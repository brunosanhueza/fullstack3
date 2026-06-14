import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer-component/footer-component";
import { VehiculoService } from '../../services/vehiculo-service';
import { Vehiculo } from '../../models/vehiculo/vehiculo';
import { FilterData } from "../filter-data/filter-data";
import { FiltroVehiculos } from '../../models/filters/FiltroVehiculos';
import { automotriz } from '../../models/automotriz/automotriz';
import { AutomotrizService } from '../../services/automotriz-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink, FilterData],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {

  // Para el filtro
  listarAutosFiltro: Vehiculo[] = [];
  vehiculos: Vehiculo[] = [];
  listarAutomotrizFiltro: automotriz[] = [];

  // Para las automotrices
  automotrices: automotriz[] = [];

  constructor(
    private router: Router,
    private vehiculoService: VehiculoService,
    private automotrizService: AutomotrizService
  ) {}

  ngOnInit(): void {

    // Carga vehículos para el filtro
    this.automotrizService.obtenerAutomotrices().subscribe({
      next: (data) => {
        this.automotrices = data;
        this.listarAutomotrizFiltro = data;
      },
      error: (err) => console.error("error al crear la automotriz", err)
    });
  }
      


  aplicarFiltro(marca: string): void{
    if (!marca){
      this.automotrices = this.listarAutomotrizFiltro;

    } else {
      this.automotrices = this.listarAutomotrizFiltro.filter(
        a => a.nombreAutomotriz.toLowerCase() === marca.toLowerCase()
      );
    }
  }
  

  verCatalogo(nombreAutomotriz: string): void {
    this.router.navigate(['/vehiculos'], {queryParams: {marca: nombreAutomotriz}});
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/register']);
  }
}