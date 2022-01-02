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
    console.log(this.jugadorSeleccionado.nombre)
    for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].nombre == this.jugadorSeleccionado.nombre)
      {
        this.vJugadores[i].multa +=  this.multa;
        this.vJugadores[i].moroso = true;
        this.listarJugadoresService.setListaJugadores(this.vJugadores);
        alert("Multas del jugador " + this.vJugadores[i].nombre + "=" +this.vJugadores[i].multa + "€");
        this.dialogRef.close(this.jugadorSeleccionado);
      }
      
  }

}
