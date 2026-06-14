// export const environment = {
//   production: false,
//   "urlUsuarios" : "http://100.57.64.185:8094/api/v1/usuarios",
//   "urlVehiculos" : "http://100.57.64.185:8095/api/v2/vehiculos"
//  };


 export const environment = {
  production : false, 
  "urlUsuarios" : "http://localhost:8094/api/v1/usuarios",
  "urlVehiculos" : "http://localhost:8095/api/v2/vehiculos",
  "urlAutomotriz": "http://localhost:8097/api/v3/automotriz"
};

 
 // environment de produccion (final y uso de consumidor) 
 // si production : true se usará este archivo (ip's servidor), 
 // de ser necesario desarrollar se utiliza
 //environments.development y se selecciona mediante production : false
 // (ip's localhost).

 // de no funcionar al usar ng s usar:
 // ng s --configuration development. o en su forma abreviada:

 // ng s -c development
