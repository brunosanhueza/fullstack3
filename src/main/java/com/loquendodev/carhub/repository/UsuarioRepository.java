package com.loquendodev.carhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loquendodev.carhub.models.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario, Integer> {

}
