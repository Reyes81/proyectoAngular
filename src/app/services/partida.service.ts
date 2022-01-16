import { Injectable } from '@angular/core';
import { Partida } from '../compartido/partida';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private http:HttpClient) { }

  vPartidas:Partida[] = []
 


  public setListaClubes(lista:Partida[]){
    this.vPartidas=lista;
  }

  public getListaClubes(){
    return this.vPartidas;
  }

  getPartidas(): Observable<Partida[]> {
    return this.http.get<Partida[]>(baseURL + 'partidas');
    }

    getPartida(id: number): Observable<Partida> {
    return this.http.get<Partida>(baseURL + 'partidas/'+ id);
    }
    getPartidasIds(): Observable<number[] | any>{
    return this.getPartidas() 
    .pipe(map(partidas => partidas.map(partidas => partidas.id))) ;
    }
}