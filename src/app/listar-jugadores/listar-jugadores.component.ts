import { Component, OnInit } from '@angular/core';
import { Club } from '../compartido/Club';
import { Jugador } from '../compartido/Jugador';
import { Persona } from "../compartido/Persona";
import { ListarJugadoresService } from '../services/listar-jugadores.service';

@Component({
  selector: 'app-listar-jugadores',
  templateUrl: './listar-jugadores.component.html',
  styleUrls: ['./listar-jugadores.component.scss']
})
export class ListarJugadoresComponent implements OnInit {


  vJugadores:Jugador[]=this.listarService.getListaJugadores();

  constructor(private listarService: ListarJugadoresService) { }


  ngOnInit(): void {


  }

  }
 
  
