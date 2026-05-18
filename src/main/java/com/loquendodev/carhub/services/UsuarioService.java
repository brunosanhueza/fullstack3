package com.loquendodev.carhub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loquendodev.carhub.models.entity.Usuario;
import com.loquendodev.carhub.repository.UsuarioRepository;

@Service

public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;


//metodo para obtener a todos los clientes 

public List<Usuario> obtenerUsuarios(){ 
return usuarioRepository.findAll(); 
}

//metodo para guardar a un cliente 
public Usuario guardarUsuario(Usuario usr){ 
return usuarioRepository.save(usr); 
} 
//metodo para encontrar a un cliente mediante su id 
public Optional<Usuario> obtenerUsuarioPorId(Integer id){ 
return usuarioRepository.findById(id); 
}

//metodo para eliminar por Id 

public boolean eliminarUsuarioPorId (Integer id){ 
if (usuarioRepository.existsById(id)){ 
usuarioRepository.deleteById(id); 
return true; 
} else {return false;} 

}

//actualizar usuario
public Optional<Usuario> actualizarUsuario(Integer id, Usuario usuarioActualizado) {
    return usuarioRepository.findById(id).map(usuarioExistente -> {
        usuarioExistente.setNameUser(usuarioActualizado.getNameUser());
        usuarioExistente.setEmailUser(usuarioActualizado.getEmailUser());
        usuarioExistente.setPasswordUser(usuarioActualizado.getPasswordUser());
        usuarioExistente.setPhoneUser(usuarioActualizado.getPhoneUser());
        return usuarioRepository.save(usuarioExistente);
    });
}




}
