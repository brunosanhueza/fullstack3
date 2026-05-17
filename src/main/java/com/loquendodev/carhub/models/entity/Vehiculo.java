package com.loquendodev.carhub.models.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Vehiculo {

    private Integer id_vehiculo;
    private String id_chasis_vehiculo;
    private String patente_vehiculo;
    private String imagen_vehiculo;
    private String color_vehiculo;
    private Double cilindrada_motor;
    private String tipo_combustible;
    private String categoria_vehiculo;
    private Double precio_vehiculo;
    private Double peso_vehiculo;


}
