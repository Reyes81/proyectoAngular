import { Injectable } from '@angular/core';
import { Club } from '../compartido/Club';

@Injectable({
  providedIn: 'root'
})
export class ListarClubesService {

  constructor() { }

  vClubes: Club[] = [
    {
     
        nombre : "club1",
        sede: "sede 1",
      },
      {
        nombre : "club2",
        sede: "sede 2",
      }
    ];

  listaClubes:Club[] = []
 

  public setListaClubes(lista:Club[]){
    this.vClubes=lista;
  }

  public getListaClubes(){
    return this.vClubes;
  }
}

