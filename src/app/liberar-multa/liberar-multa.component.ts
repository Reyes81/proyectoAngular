import { Component, OnInit } from '@angular/core';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-liberar-multa',
  templateUrl: './liberar-multa.component.html',
  styleUrls: ['./liberar-multa.component.scss']
})
export class LiberarMultaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LiberarMultaComponent>, private listarJugadoresService:ListarJugadoresService) { }

  vJugadores:Jugador[] = this.listarJugadoresService.getListaJugadores();
  jugadorSeleccionado: Jugador = new Jugador();

  ngOnInit(): void {
  }

  onSubmit(){
    for(var i = 0; i < this.vJugadores.length; i++){
      if(this.vJugadores[i].nombre == this.jugadorSeleccionado.nombre){
        this.vJugadores[i].multa = 0;
        this.listarJugadoresService.setListaJugadores(this.vJugadores);
        alert(this.vJugadores[i].multa);
        this.dialogRef.close(this.jugadorSeleccionado);
      }
    }
  }

}
