package com.loquendodev.vehiculos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loquendodev.vehiculos.models.VehiculoModel;
import com.loquendodev.vehiculos.repository.VehiculoRepository;
import com.loquendodev.vehiculos.services.VehiculoService;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "http://localhost:4200")  
public class VehiculoController {

    private final VehiculoRepository vehiculoRepository;

    VehiculoController(VehiculoRepository vehiculoRepository){
        this.vehiculoRepository = vehiculoRepository;
    }

    @Autowired
    private VehiculoService vehiculoService;

    @GetMapping("/vehiculos")
    public List<VehiculoModel> listarVehiculos(){
        return vehiculoService.obtenerVehiculos();
    }

    @GetMapping("/vehiculos/{id}")
    public ResponseEntity<VehiculoModel> obtenerVehiculoPorId(@PathVariable("id") Integer id){
        return vehiculoService.obtenerVehiculoPorId(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/vehiculos/{id}")
    public ResponseEntity<String> eliminarVehiculoPorId(@PathVariable("id") Integer id){
        boolean vehiculoEliminado = vehiculoService.eliminarVehiculoPorId(id);
        if (vehiculoEliminado){
            return ResponseEntity.ok("Vehiculo eliminado");

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("el vehiculo que se desea eliminar\ncon su id: "+id+" no ha sido encontrado");
        }
    }

    @PutMapping("/vehiculos/{id}")
    public ResponseEntity<VehiculoModel> actualizarVehiculo(@PathVariable("id") Integer id, @RequestBody VehiculoModel veh)
    {
        return vehiculoRepository.findById(id)
        .map(vehiculoCreado -> {
            vehiculoCreado.setMarcaVehiculo(veh.getMarcaVehiculo());
            vehiculoCreado.setModeloVehiculo(veh.getModeloVehiculo());
            vehiculoCreado.setAnioVehiculo(veh.getAnioVehiculo());
            vehiculoCreado.setTipoBencinaVehiculo(veh.getTipoBencinaVehiculo());

            VehiculoModel vehiculoActualizado = vehiculoRepository.save(vehiculoCreado);
            return ResponseEntity.ok(vehiculoActualizado);

        }).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PostMapping("/vehiculos")
    public ResponseEntity<VehiculoModel> crearVehiculo(@RequestBody VehiculoModel veh){
        VehiculoModel vehiculoCreado = vehiculoService.guardarVehiculoModel(veh);
        return ResponseEntity.status(HttpStatus.CREATED).body(vehiculoCreado);
    }


}
