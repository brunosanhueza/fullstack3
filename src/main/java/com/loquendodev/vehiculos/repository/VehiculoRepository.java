package com.loquendodev.vehiculos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loquendodev.vehiculos.models.VehiculoModel;


@Repository
public interface VehiculoRepository extends JpaRepository <VehiculoModel, Integer>{

}
