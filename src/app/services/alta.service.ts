import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListarJugadoresService } from './listar-jugadores.service';
import { ListarFederacionesService } from './listar-federaciones.service';
import { Jugador } from '../compartido/Jugador';
import { Club } from '../compartido/Club';
import { Federacion } from '../compartido/Federacion';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
const httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json',
'Authorization': 'my-auth-token'
})
};


@Injectable({
  providedIn: 'root'
})
export class AltaService {

  jugadores:Jugador[] =[];
  jugador: Jugador = new Jugador();
  federacion: Federacion = new Federacion();
  club: Club = new Club();
  vFederaciones: Federacion[] = [];

  

  constructor(private http:HttpClient, private listarJugadoresService:ListarJugadoresService, private listarFederacionesService: ListarFederacionesService, @Inject('baseURL') public BaseURL:string, private procesaHttpmsjService: ProcesaHTTPMsjService) { }
   
  /*
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
*/

ngOninit(){
  this.listarFederacionesService.getFederaciones().subscribe(federaciones=>this.vFederaciones=federaciones);
}
setJugador(newJugador:Jugador): Observable<Jugador> {
  alert(newJugador.nombre + " - " + newJugador.id);
  return this.http.post<Jugador>(baseURL + 'jugadores/', newJugador, httpOptions).pipe(catchError(this.procesaHttpmsjService.gestionError));;
  

  
}

    altaClubFederacion(federacion: Federacion, club: Club): void{

      for(var i = 0; i < this.vFederaciones.length; i++){
        if(this.vFederaciones[i].nombre == federacion.nombre){
          this.vFederaciones[i].clubes.push(club);
          this.listarFederacionesService.setListaFederaciones(this.vFederaciones);
          alert("El club " + club.nombre + " se ha inscrito correctamente en la federación " + federacion.nombre)
        }
      } 

    }
    
}
