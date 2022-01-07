import { Injectable } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { HttpHeaders } from '@angular/common/http';
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


export class JugadoresService {
  
  vJugadores:Jugador[] =[];
    identificador:number = this.vJugadores.length +1;
    jugador:Jugador = new Jugador();
   

  constructor(private http: HttpClient, private procesaHTTPMsService: ProcesaHTTPMsjService) { }

    getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(baseURL + 'jugadores')
    .pipe(catchError(this.procesaHTTPMsService.gestionError));
    }

    getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(baseURL + 'jugadores/'+ id)
    .pipe(catchError(this.procesaHTTPMsService.gestionError));
    }
    getProductosIds(): Observable<number[] | any>{
    return this.getJugadores() 
    .pipe(map(jugadores => jugadores.map(jugador => jugador.id))) ;
    }

    setJugador(producto:Jugador): Observable<Jugador> {
      
      return this.http.put<Jugador>(baseURL + 'jugadores/'+ producto.id, producto, httpOptions)
      .pipe(catchError(this.procesaHTTPMsService.gestionError));
    }
    /*
  public setListaJugadores(lista:any[]){
    this.vJugadores=lista;
  }
*/
  public addPlayer(){
    
    
    this.identificador+=1;
  }
  
  
 /**
  * Necesario para evitar duplicidad de ids sin tener que recorrer todos los jugadores
  * @returns El identicador actual del jugador
  */
 
  public getId():number{
    return this.identificador;
  }

/*
  public getJugador(id:number):Jugador{
    
    for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].id == id){
        return this.vJugadores[i];
      }
      return this.jugador;
  }
*/

  public ModifJugador(id:number, jug:Jugador):void{
    console.log("Modificar jugador "+ id)
    for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].id == id){
        jug.id = this.vJugadores[i].id
         this.vJugadores[i] = jug;
         console.log(this.vJugadores[i]);
      }
  }

  public MayorId():number{
    let valor:number = 0;
    
    for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].id >= valor){
        valor = this.vJugadores[i].id +1; 
         
         
      }
      return valor;
  }

  public getListaJugdores(){
    return this.vJugadores;
  }
  
}
