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
  jugador = { nombre: '', apellido: '', edad: 18, club:  new Club(), user: '',password: '', responsable: '', categoria: ''};
  id:number = this.vJugadores.length +1;
  club:Club = new Club();

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("jugador añadido = " + this.jugador.club.nombre);
    this.club.nombre = this.jugador.club.nombre;

    //const newJugador= new Jugador(this.id,this.jugador.nombre, this.jugador.apellido, this.jugador.edad, this.club, this.jugador.user,this.jugador.password, this.jugador.responsable,this.jugador.categoria);
    this.altaJugadorService.altaJugador(this.id,this.jugador.nombre, this.jugador.apellido, this.jugador.edad, this.club, this.jugador.user,this.jugador.password, this.jugador.responsable,this.jugador.categoria);
    
  }
}
