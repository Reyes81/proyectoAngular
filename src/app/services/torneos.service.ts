import { Injectable } from '@angular/core';
import { Torneo } from '../compartido/Torneo';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };

@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  

  vTorneos: Torneo[] = [];

  identificador:number = this.vTorneos.length +1;

  constructor(private http:HttpClient, private procesaHttpmsjService:ProcesaHTTPMsjService) { }
 //limpiarlo

 /*
  public setListaTorneos(lista:any[]){
    this.vTorneos=lista;
  }

  public getListaTorneos(){
    return this.vTorneos;
  }
    
   
  public getId():number{
    return this.identificador;
  }
*/

    getTorneos(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(baseURL + 'torneos')
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
    }

    getTorneo(id: number): Observable<Torneo> {
    return this.http.get<Torneo>(baseURL + 'torneos/'+ id)
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
    }
    getTorneosIds(): Observable<number[] | any>{
    return this.getTorneos() 
    .pipe(map(torneos => torneos.map(torneo => torneo.id))) ;
    }

    addTorneo(newTorneo: Torneo): Observable<Torneo>{
      return this.http.post<Torneo>(baseURL + 'torneos/', newTorneo, httpOptions).pipe(catchError(this.procesaHttpmsjService.gestionError));
    }
      updateTorneo(torneo:Torneo):Observable<Torneo>{
        return this.http.put<Torneo>(baseURL + 'torneos/'+ torneo.id, torneo, httpOptions)
        .pipe(catchError(this.procesaHttpmsjService.gestionError));
      }
    }

