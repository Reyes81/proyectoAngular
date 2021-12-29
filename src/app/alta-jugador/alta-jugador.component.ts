import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AltaService } from '../services/alta.service';
import { Jugador } from '../compartido/Jugador';
import { ListarClubesService } from '../services/listar-clubes.service';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Club } from '../compartido/Club';
@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrls: ['./alta-jugador.component.scss']
})
export class AltaJugadorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AltaJugadorComponent>,private altaJugadorService: AltaService, private listarJugadoresService: ListarJugadoresService, private listarClubesService: ListarClubesService) { }

  vJugadores = this.listarJugadoresService.getListaJugadores();
  vClubes = this.listarClubesService.getListaClubes();

  vCategorias: string[] = ["Junior", "Senior"];
  jugador = {nombre: '', apellido: '', edad: 18, club: Club, user: '',password: '', responsable: '', categoria: ''};
  id:number = this.vJugadores.length +1;
  //newJugador: Jugador = new Jugador(this.id,this.jugador.nombre, this.jugador.apellido, this.jugador.edad, this.jugador.club, this.jugador.user,this.jugador.password, this.jugador.responsable,this.jugador.categoria);

  ngOnInit(): void {
  }
  onSubmit() {
    
    //this.altaJugadorService.altaJugador(this.nuevoJugador);
    
  }
}
