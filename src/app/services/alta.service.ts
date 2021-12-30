import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListarJugadoresService } from './listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';
import { Club } from '../compartido/Club';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  jugadores:Jugador[] =[];
  jugador: Jugador = new Jugador();

  constructor(private listarJugadoresService:ListarJugadoresService) { }
   
    altaJugador(id:number,nombre: string, apellido:string, edad:number, club: Club, user:string, password: string, responsable: string, categoria: string) {
      
      this.jugador.id = id;
      this.jugador.nombre = nombre;
      this.jugador.apellido = apellido;
      this.jugador.edad = edad;
      this.jugador.club = club;
      this.jugador.user = user;
      this.jugador.passwd = password;
      this.jugador.responsable = responsable;
      this.jugador.categoria = categoria;

      this.jugadores = this.listarJugadoresService.getListaJugadores();
      this.jugadores.push(this.jugador);
      this.listarJugadoresService.setListaJugadores(this.jugadores);
    }
    
}
