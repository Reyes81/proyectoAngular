import { Injectable } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ListarJugadoresService {
  
  vJugadores:Jugador[] =[];
    identificador:number = this.vJugadores.length +1;
    jugador:Jugador = new Jugador();
   

  constructor(private http: HttpClient) { }

    getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(baseURL + 'jugadores');
    }

    getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(baseURL + 'jugadores/'+ id);
    }
    getProductosIds(): Observable<number[] | any>{
    return this.getJugadores() 
    .pipe(map(jugadores => jugadores.map(jugador => jugador.id))) ;
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
  
}
