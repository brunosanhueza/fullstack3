import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FiltroVehiculos } from '../../models/filter-vehicles/FiltroVehiculos';
import { Vehiculo } from '../../models/vehiculo/vehiculo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-data.html',
  styleUrl: './filter-data.css',
})
export class FilterData {






/**INPUT PARA HACER UN RECORRIDO A LA BASE DE DATOS
 * E INSERTAR MARCAS NUEVAS A LA LISTA SIN NECESIDAD
 * DE ANDAR COMPILANDO UNA Y OTRA Y OTRA Y OTRA Y OTRA
 * VEZ :u
 */

  @Input() set listaVehiculos(autos: Vehiculo[]){
    if (autos && autos.length > 0){
      this.marcas = [...new Set(autos.map(aut => aut.marcaVehiculo))].sort();
      this.modelos = [...new Set(autos.map(aut => aut.modeloVehiculo))].sort();
      this.tipoCombustible = [...new Set(autos.map(aut => aut.tipoBencinaVehiculo))].sort();
    }
  }




  //emisor de eventos hacia dashboard
  //esto es para poder filtrar u.u
  @Output() cambioDeFiltro = new EventEmitter<FiltroVehiculos>();

  //variables que están ligadas al html para realizar tal filtracion de datos en la busqueda:

  marcaSel: string = "";
  modeloSel: string = "";
  tipoBencinaSel: string = "";


  //listas para renderizar opciones de filtrado:

  //estas listas se actualizan en base a lo que la base de datos
  //contenga en el atributo de la tabla vehiculo_model
  marcas: string[] = [];
  modelos: string[] = [];
  tipoCombustible: string[] = [];


  //   <h4>{{ vehiculo.marcaVehiculo }}</h4>
  // <p>{{ vehiculo.modeloVehiculo }} · {{ vehiculo.anioVehiculo }}</p>
  // <p>{{ vehiculo.tipoBencinaVehiculo }} · {{ vehiculo.tipoTransmisionVehiculo }}</p>


  //funcion hija de aplicarFiltro de dashboards.ts
  notificarFiltros(): void {
    const filtros: FiltroVehiculos = {
      marca: this.marcaSel,
      modelo: this.modeloSel,
      combustible: this.tipoBencinaSel
    };
    this.cambioDeFiltro.emit(filtros);
  }

  limpiarFiltros(): void {
    this.marcaSel = "";
    this.modeloSel = "";
    this.tipoBencinaSel = "";

    //aplicamos cambios
    this.notificarFiltros();
  }

      
}
