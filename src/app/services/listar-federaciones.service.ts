import { Injectable } from '@angular/core';
import { Federacion } from '../compartido/Federacion';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListarFederacionesService {

  constructor(private http:HttpClient) { }

  vFederaciones: Federacion[] = [];


  public setListaFederaciones(lista:Federacion[]){
    this.vFederaciones=lista;
  }

 
  getFederaciones(): Observable<Federacion[]> {
    return this.http.get<Federacion[]>(baseURL + 'federaciones');
    }

    getFederacion(id: number): Observable<Federacion> {
    return this.http.get<Federacion>(baseURL + 'federaciones/'+ id);
    }
    getFederacionesIds(): Observable<number[] | any>{
    return this.getFederaciones() 
    .pipe(map(federaciones => federaciones.map(federacion => federacion.id))) ;
    }
}
