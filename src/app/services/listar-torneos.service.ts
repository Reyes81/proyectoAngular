import { Injectable } from '@angular/core';
import { Torneo } from '../compartido/Torneo';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarTorneosService {

  vTorneos: Torneo[] = [];

  identificador:number = this.vTorneos.length +1;

  constructor(private http:HttpClient) { }
 //limpiarlo
  public setListaTorneos(lista:any[]){
    this.vTorneos=lista;
  }

  public getListaTorneos(){
    return this.vTorneos;
  }
//cambiarlo por put
  public addTorneo(torneo: Torneo){
    
    this.vTorneos.push(torneo);
    this.identificador+=1;
  }

  public getId():number{
    return this.identificador;
  }

  getTorneos(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(baseURL + 'torneos');
    }

    getTorneo(id: number): Observable<Torneo> {
    return this.http.get<Torneo>(baseURL + 'torneos/'+ id);
    }
    getTorneosIds(): Observable<number[] | any>{
    return this.getTorneos() 
    .pipe(map(torneos => torneos.map(torneo => torneo.id))) ;
    }
}