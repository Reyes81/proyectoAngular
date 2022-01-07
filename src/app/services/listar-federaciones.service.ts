import { Injectable } from '@angular/core';
import { Federacion } from '../compartido/Federacion';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';


@Injectable({
  providedIn: 'root'
})
export class ListarFederacionesService {

  constructor(private http:HttpClient, private procesaHttpmsjService:ProcesaHTTPMsjService) { }

  vFederaciones: Federacion[] = [];


  public setListaFederaciones(lista:Federacion[]){
    this.vFederaciones=lista;
  }

 
  getFederaciones(): Observable<Federacion[]> {
    return this.http.get<Federacion[]>(baseURL + 'federaciones')
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
    }

    getFederacion(id: number): Observable<Federacion> {
    return this.http.get<Federacion>(baseURL + 'federaciones/'+ id)
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
    
    }
    getFederacionesIds(): Observable<number[] | any>{
    return this.getFederaciones() 
    .pipe(map(federaciones => federaciones.map(federacion => federacion.id))) ;
    }
}
