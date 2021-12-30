import { Component, OnInit } from '@angular/core';
import { ListarClubesService } from '../services/listar-clubes.service';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';
import { Club } from '../compartido/Club';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-cambiar-club',
  templateUrl: './cambiar-club.component.html',
  styleUrls: ['./cambiar-club.component.scss']
})
export class CambiarClubComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CambiarClubComponent>,private listarJugadoresService:ListarJugadoresService, private listarClubesService: ListarClubesService) { }

  vJugadores:Jugador[] = this.listarJugadoresService.getListaJugadores(); 
  vClubes: Club[] = this.listarClubesService.getListaClubes();
  selJugador="Seleccione un jugador";

  jugadorSeleccionado:Jugador = new Jugador();
  
  clubOrigen: Club = new Club();
  clubDestino: Club = new Club();

  ngOnInit(): void {
    
  }

  onSubmit() {

    alert(this.jugadorSeleccionado.nombre);
    if(this.clubOrigen.nombre == this.clubDestino.nombre){
      alert("Los clubes origen y destino deben ser diferentes");
    }

    else{
      for(var i = 0; i < this.vJugadores.length;i++){
        if(this.vJugadores[i].id == this.jugadorSeleccionado.id)
        {
          
          this.vJugadores[i].club = this.clubDestino;
        }
        
      }
      this.listarJugadoresService.setListaJugadores(this.vJugadores);
      alert("Cambio de club realizado correctamente");
      this.dialogRef.close(this.jugadorSeleccionado);
    }
   
  }

}
