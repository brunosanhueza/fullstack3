import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer-component/footer-component";
import { VehiculoService } from '../../services/vehiculo-service';
import { Vehiculo } from '../../models/vehiculo/vehiculo';
import { FilterData } from "../filter-data/filter-data";
import { FiltroVehiculos } from '../../models/filter-vehicles/FiltroVehiculos';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink, FilterData],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit{
aplicarFiltro(filtros: FiltroVehiculos): void {
  this.vehiculos = this.listarAutosFiltro.filter(auto =>{
    const coincideMarca = !filtros.marca || auto.marcaVehiculo.toLowerCase() === filtros.marca.toLowerCase();
    const coincideModelo = !filtros.modelo || auto.modeloVehiculo.toLowerCase() === filtros.modelo.toLowerCase();
    const coincideCombustible = !filtros.combustible || auto.tipoBencinaVehiculo.toLowerCase() === filtros.combustible.toLowerCase();
    

    //solo se va a quedar el auto/vehiculo si cumple las 3 condiciones:
    return coincideMarca && coincideModelo && coincideCombustible;
  });
}
  //obtener directamente valores de la base de datos para el filtrado de datos
  //en filter-data.ts
  listarAutosFiltro: Vehiculo[] = [];

  //para las cards
  vehiculos: Vehiculo[] = []; 

  constructor(

    private router: Router,
    private vehiculoService: VehiculoService
  ){}

  ngOnInit(): void {
    this.vehiculoService.obtenerVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.listarAutosFiltro = data;

      },
      error: (err) => console.error('error al cargar los autos :C ', err)
    });
  }

  
    logout(): void {
      localStorage.removeItem('token');
      this.router.navigate(['/register']);
  }
}
