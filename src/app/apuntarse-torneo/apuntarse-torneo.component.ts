import { Component, OnInit } from '@angular/core';
import { ApuntarseTorneoService } from '../services/apuntarse-torneo-service.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ListarTorneosService } from '../services/listar-torneos.service';
import { Torneo } from '../compartido/Torneo';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresService } from '../services/listar-jugadores.service';

@Component({
  selector: 'app-apuntarse-torneo',
  templateUrl: './apuntarse-torneo.component.html',
  styleUrls: ['./apuntarse-torneo.component.scss']
})
export class ApuntarseTorneoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ApuntarseTorneoComponent>,private apuntarseTorneoService: ApuntarseTorneoService, private listarTorneosService: ListarTorneosService, private listarJugadores: ListarJugadoresService) { }

  vTorneos = this.listarTorneosService.getListaTorneos(); 
  vJugadores = this.listarJugadores.getListaJugadores();
  
  vCategorias: string[] = ["Junior", "Senior"]; 

  torneo: Torneo = new Torneo();
  jugador: Jugador = new Jugador();

  ngOnInit(): void {
  }

  onSubmit() {
  
    alert(this.torneo.jugadores.length);
    if(this.torneo.jugadores.length==0)
    {
      this.apuntarseTorneoService.apuntarJugadorTorneo(this.torneo, this.jugador);
      this.dialogRef.close(this.jugador.nombre);
    }
    else{
      for(var i = 0; i < this.torneo.jugadores.length; i++ ){
        if(this.torneo.jugadores[i].nombre == this.jugador.nombre){
          alert("El Jugador de nombre " + this.jugador.nombre + "ya está inscrito en el " + this.vTorneos[i].nombre + "Los jugadores inscritos son: " + this.vJugadores );
        }
        else{
          this.apuntarseTorneoService.apuntarJugadorTorneo(this.torneo, this.jugador);
          this.dialogRef.close(this.jugador.nombre);
        }
      }
    }
  }
}