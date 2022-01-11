import { Injectable } from '@angular/core';
import { Entrenamiento } from '../compartido/Entrenamiento';
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
export class EntrenamientoService {

  vEntrenamientos:Entrenamiento[] =[];
  entrenamiento:Entrenamiento = new Entrenamiento();
  constructor(private http: HttpClient, private procesaHTTPMsService: ProcesaHTTPMsjService) { }

  getEntrenamientos(): Observable<Entrenamiento[]> {
    return this.http.get<Entrenamiento[]>(baseURL + 'Entrenamientos')
    .pipe(catchError(this.procesaHTTPMsService.gestionError));
    }

  setEntrenamiento(newEntrene:Entrenamiento): Observable<Entrenamiento> {
      return this.http.post<Entrenamiento>(baseURL + 'Entrenamientos/', newEntrene, httpOptions).pipe(catchError(this.procesaHTTPMsService.gestionError));
    }
}
