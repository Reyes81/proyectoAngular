import { Component, OnInit, Inject } from '@angular/core';
import { Club } from '../compartido/Club';
import { Jugador } from '../compartido/Jugador';
import { Persona } from "../compartido/Persona";
import { JugadoresService } from '../services/jugadores.service';


import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';

@Component({
  selector: 'app-listar-jugadores',
  templateUrl: './listar-jugadores.component.html',
  styleUrls: ['./listar-jugadores.component.scss']
})
export class ListarJugadoresComponent implements OnInit {


  vJugadores:Jugador[]= [];
  errorMensaje: string= "";

  constructor(private listarService: JugadoresService, @Inject('baseURL') public BaseURL:string) {
   }


  ngOnInit(): void {
    this.listarService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores, errorMensaje=> this.errorMensaje=<any>errorMensaje);

  }

  }
 
  
