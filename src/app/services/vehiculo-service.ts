import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Vehiculo } from '../models/vehiculo/vehiculo';

@Injectable({
  providedIn: 'root',
})


export class VehiculoService {
  private http = inject(HttpClient);


  async obtenerVehiculos(){
    return await lastValueFrom(this.http.get<Vehiculo>(environmen))
  }

}
