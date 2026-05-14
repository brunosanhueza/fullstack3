//zona vehiculo
export interface Vehiculo{
  id_chasis_vehiculo:number;
  patente_vehiculo:string;
  imagen_vehiculo:string;
  color_vehiculo:string;
  cilindrada_motor:number;
  tipo_combustible:string;
  categoria_vehiculo:string;
  precio_vehiculo:number;
  peso_vehiculo:number;
}

//zona de marca
export interface Marca{
  id_marca:string;
  logo_marca:string;
}