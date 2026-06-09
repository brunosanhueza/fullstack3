package com.loquendodev.compra.model.entity;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity



public class facturaModel{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="NRO_Factura", unique = true, nullable = false)
    private Integer nro_factura;

    @Column(name = "Subtotal")
    private Float subtotal_factura;

    @Column(name= "Metodo_de_ pago")
    private String metodo_pago_factura;

    @Column(name= "Fecha_Emision_factura")
    private Date fecha_emision_factura;


}