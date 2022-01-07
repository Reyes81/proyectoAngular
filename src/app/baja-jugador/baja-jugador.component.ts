import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';
import { JugadoresService } from '../services/jugadores.service';
import { BajaService } from '../services/baja.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-baja-jugador',
  templateUrl: './baja-jugador.component.html',
  styleUrls: ['./baja-jugador.component.scss']
})
export class BajaJugadorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BajaJugadorComponent>,private listarService: JugadoresService, private bajaService: BajaService) { }
 
    vJugadores:Jugador[]=[]; 
    jugadorSeleccionado:Jugador = new Jugador();
    deleteMensaje: string = "";


  ngOnInit(): void {
    this.listarService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores)
  }

  onSubmit() {
    
    
    console.log("Jugador borrado" + this.jugadorSeleccionado.id);
    
    //this.bajaService.bajaJugador(this.ObtenerId());
    this.bajaService.bajaJugador(this.ObtenerId()).subscribe(deleteMensaje => this.deleteMensaje = <any>deleteMensaje);
    
    this.dialogRef.close(this.jugadorSeleccionado);
  }

  ObtenerId(): number{
    const datos: string[] = this.jugadorSeleccionado.id.toString().split(" ");
    console.log("valor " + datos[datos.length-1]);
    return parseInt( datos[datos.length-1])
  }

}
