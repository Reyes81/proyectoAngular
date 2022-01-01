import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-multa-jugador',
  templateUrl: './multa-jugador.component.html',
  styleUrls: ['./multa-jugador.component.scss']
})
export class MultaJugadorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MultaJugadorComponent>,private listarJugadoresService: ListarJugadoresService) { }

  jugadorSeleccionado: Jugador = new Jugador();
  vJugadores: Jugador [] = this.listarJugadoresService.getListaJugadores();
  multa:number = 0;
  ngOnInit(): void {
  }

  onSubmit(){

    for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].nombre = this.jugadorSeleccionado.nombre)
      {
        this.vJugadores[i].multa = this.vJugadores[i].multa + this.multa;
        this.listarJugadoresService.setListaJugadores(this.vJugadores);
        this.dialogRef.close(this.jugadorSeleccionado);
      }
      alert(this.vJugadores[i].multa);
  }

}
