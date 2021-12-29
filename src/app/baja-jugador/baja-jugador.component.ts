import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { BajaService } from '../services/baja.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-baja-jugador',
  templateUrl: './baja-jugador.component.html',
  styleUrls: ['./baja-jugador.component.scss']
})
export class BajaJugadorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BajaJugadorComponent>,private listarService: ListarJugadoresService, private bajaService: BajaService) { }
 
    vJugadores:Jugador[]=this.listarService.getListaJugadores(); 
    seleccionado:Jugador = this.vJugadores[0];


  ngOnInit(): void {

  }

  onSubmit() {
    this.bajaService.bajaJugador(this.seleccionado);
    this.dialogRef.close(this.seleccionado);
  }

}
