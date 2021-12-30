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
    jugadorSeleccionado:Jugador = new Jugador();


  ngOnInit(): void {

  }

  onSubmit() {
    
    
    console.log("Jugador boirrado" + this.jugadorSeleccionado.id);
    
    this.bajaService.bajaJugador(this.ObtenerId());
    
    this.dialogRef.close(this.jugadorSeleccionado);
  }

  ObtenerId(): number{
    const datos: string[] = this.jugadorSeleccionado.id.toString().split(" ");
    console.log("valor " + datos[datos.length-1]);
    return parseInt( datos[datos.length-1])
  }

}
