import { Injectable } from '@angular/core';
import { Torneo } from '../compartido/Torneo';

@Injectable({
  providedIn: 'root'
})
export class ListarTorneosService {

  vTorneos: Torneo[] = [
    {
      id: 1,
      nombre: 'Interfacultats',
      categoria: "Senior",
      jugadores: [],
    },
    {
      id: 2,
      nombre: 'Torneo de Ajedrez Santa Eulalia',
      categoria: "Senior",
      jugadores: [],
    }
  ];

  identificador:number = this.vTorneos.length +1;

  constructor() { }

  public setListaTorneos(lista:any[]){
    this.vTorneos=lista;
  }

  public getListaTorneos(){
    return this.vTorneos;
  }

  public addTorneo(torneo: Torneo){
    
    this.vTorneos.push(torneo);
    this.identificador+=1;
  }

  public getId():number{
    return this.identificador;
  }
}