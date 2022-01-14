import { Injectable } from '@angular/core';
import { Club } from '../compartido/Club';
import { HttpClient } from '@angular/common/http';
import { baseURL2 } from '../compartido/baseurl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {

  constructor(private http:HttpClient) { }

  vClubes:Club[] = []
 


  public setListaClubes(lista:Club[]){
    this.vClubes=lista;
  }

  public getListaClubes(){
    return this.vClubes;
  }

  getClubes(): Observable<Club[]> {
    return this.http.get<Club[]>(baseURL2 + 'club/');
    }

    getClub(id: number): Observable<Club> {
    return this.http.get<Club>(baseURL2 + 'club/'+ id);
    }
    getClubesIds(): Observable<number[] | any>{
    return this.getClubes() 
    .pipe(map(clubes => clubes.map(club => club.id))) ;
    }
}

