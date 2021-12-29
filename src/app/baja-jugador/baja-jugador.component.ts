import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-baja-jugador',
  templateUrl: './baja-jugador.component.html',
  styleUrls: ['./baja-jugador.component.scss']
})
export class BajaJugadorComponent implements OnInit {

  constructor(public dialogo: MatDialog,private listarService: ListarJugadoresService) { }
 
    vJugadores:any[]=[];

  ngOnInit(): void {

    this.vJugadores = this.listarService.getListaJugadores(); 
    console.log(this.vJugadores.length);
  }

  onSubmit() {
    //console.log("Usuario: ", this.usuario);
    //this.dialogRef.close(); 
    /*
    if (this.autenticarService.autenticar(this.usuario))
    {
      this.dialogRef.close(this.usuario);
    } 
    else {
      let usuario = {nombre: '', password: '', nocerrar: false};
      this.dialogRef.close(usuario);
    }
    */
}

}
