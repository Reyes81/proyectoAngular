import { Injectable } from '@angular/core';
import { Federacion } from '../compartido/Federacion';
import { Club } from '../compartido/Club';

@Injectable({
  providedIn: 'root'
})
export class ListarFederacionesService {

  constructor() { }

  vFederaciones: Federacion[] = [
    {
     
        nombre : "Federacion Comunidad Valenciana",
        presidente: "Alberto Gaspar",
        numMax_clubes: 30,
        id: 0,
        clubes: []
      },

      {
     
        nombre : "Federacion Región de Murcia",
        presidente: "Alejandro Huete",
        numMax_clubes: 30,
        id: 1,
        clubes: []
      },

      {
     
        nombre : "Federacion Comunidad de Madrid",
        presidente: "Alejandro Reyes",
        numMax_clubes: 30,
        id: 2,
        clubes: []
      },
     
    ];


  public setListaFederaciones(lista:Federacion[]){
    this.vFederaciones=lista;
  }

  public getListaFederaciones(){
    return this.vFederaciones;
  }
}
