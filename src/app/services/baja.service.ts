
import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { JugadoresService } from './jugadores.service';
import { Jugador } from '../compartido/Jugador';
import { Observable } from 'rxjs';

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
export class BajaService {

  vJugadores: Jugador[] = [];
  jugador: Jugador = new Jugador();

  constructor(private http:HttpClient, private listarJugadoresService:JugadoresService, @Inject('baseURL') public BaseURL:string, private procesaHttpmsjService: ProcesaHTTPMsjService) { }

  ngOninit(){
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
  }

  public bajaJugador(id: number): Observable<Jugador> {
    return this.http.delete<Jugador>(baseURL + 'jugadores/'+ id, httpOptions);
    }

    
    //console.log("indice = " +jugadorBaja.id)
    
    /*for(var i=0;i< this.vJugadores.length;i++){
      if(this.vJugadores[i].id == jugadorBaja.id){
        indice = i;
      }
    }*/
    
    
    //this.vJugadores.splice(id-1,1);
    //this.listarJugadoresService.setListaJugadores(this.vJugadores);
  
}
