import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vehiculo } from '../../models/vehiculo/vehiculo';
import { VehiculoService } from '../../services/vehiculo-service';

@Component({
  selector: 'app-vehiculo-component',
  imports: [ReactiveFormsModule],
  templateUrl: './vehiculo-component.html',
  styleUrl: './vehiculo-component.css',
})

//aqui empieza la magia 7u7
export class VehiculoComponent implements OnInit{

  //se hace el formulario tipo FormGroup
  VehiculoForm!: FormGroup;
  vehiculos: Vehiculo[] = [];

  //variables, aunque no son necesarias son buenas para ver la consola si se registró el auto :D
  msgOK= "";
  msgERR= "";

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService
  ) {}

  ngOnInit(): void {
      this.VehiculoForm = this.fb.group({
        marcaVehiculo: ['', Validators.required],
        modeloVehiculo: ['', Validators.required],
        anioVehiculo: ['', Validators.required],
        tipoBencinaVehiculo: ['', Validators.required],
        tipoTransmisionVehiculo: ['', Validators.required],
        tipoPropulsionVehiculo: ['', Validators.required]
      });

      this.listarVehiculos();
  }

  listarVehiculos(): void {
    this.vehiculoService.obtenerVehiculos().subscribe({
      next: (data) => this.vehiculos = data,
      error: (err) => console.error('Error al listar vehiculos: ',err)
    });
  }


  onSubmit(): void {
    if (this.VehiculoForm.valid){
      const nuevoVehiculo: Vehiculo = this.VehiculoForm.value;
      this.vehiculoService.crearVehiculo(nuevoVehiculo).subscribe({
        next: (res) => {
          console.log('el vehiculo se ha creado uwu: ',res);
          this.msgOK= 'el vehiculo ha sido creado OK';
          this.msgERR= 'no hay ningun error yeei';
          this.VehiculoForm.reset();
          this.listarVehiculos();
        },
        error: (err) => {
          console.error('error al crear el vehiculo: ',err);
          this.msgERR= 'Error al crear el vehiculo pipipi';
          this.msgOK='';
        }
      });
    }
  }
}
