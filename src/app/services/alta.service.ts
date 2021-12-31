import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListarJugadoresService } from './listar-jugadores.service';
import { ListarFederacionesService } from './listar-federaciones.service';
import { Jugador } from '../compartido/Jugador';
import { Club } from '../compartido/Club';
import { Federacion } from '../compartido/Federacion';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  jugadores:Jugador[] =[];
  jugador: Jugador = new Jugador();
  federacion: Federacion = new Federacion();
  club: Club = new Club();
  vFederaciones: Federacion[] = [];

  

  constructor(private listarJugadoresService:ListarJugadoresService, private listarFederacionesService: ListarFederacionesService) { }
   
    altaJugador(id:number,nombre: string, apellido:string, edad:number, club: Club, user:string, password: string, responsable: string, categoria: string) {
      console.log("id " + id);
      this.jugador = new Jugador();
      this.jugador.id = this.listarJugadoresService.getId();
      this.jugador.nombre = nombre;
      this.jugador.apellido = apellido;
      this.jugador.edad = edad;
      this.jugador.club = club;
      this.jugador.user = user;
      this.jugador.passwd = password;
      this.jugador.responsable = responsable;
      this.jugador.categoria = categoria;

      //this.jugadores = this.listarJugadoresService.getListaJugadores();

      // Anyadir Jugador al vector
      this.listarJugadoresService.addPlayer(this.jugador);
    }

    altaClubFederacion(federacion: Federacion, club: Club): void{

      this.vFederaciones = this.listarFederacionesService.getListaFederaciones();
      for(var i = 0; i < this.vFederaciones.length; i++){
        if(this.vFederaciones[i].nombre == federacion.nombre){
          this.vFederaciones[i].clubes.push(club);
          this.listarFederacionesService.setListaFederaciones(this.vFederaciones);
          alert("El club " + club.nombre + " se ha inscrito correctamente en la federación " + federacion.nombre)
        }
      } 

    }
    
}
