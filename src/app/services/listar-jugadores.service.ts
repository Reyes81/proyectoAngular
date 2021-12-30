import { Injectable } from '@angular/core';
import { Jugador } from '../compartido/Jugador';

@Injectable({
  providedIn: 'root'
})
export class ListarJugadoresService {

  vJugadores: Jugador[] = [
    {
      id: 1,
      
      categoria: 'Junior',
      moroso: false,
      responsable: '',
      
      // persona
      nombre: 'Alberto ',
      apellido: "Gaspar Villaba",
      edad: 18,
      user: "usuario",
      passwd: "password",

      // club
      club: {
        nombre : "club1",
        sede: "sede 1",
      }
      
     
      
    },
    {
      id: 2,
      
      
      
      categoria: 'Senior',
      moroso: true,
      responsable: '',
      
      // persona
      nombre: 'Alex ',
      apellido: "Reyes ",
      edad: 44,
      user: "usuario2",
      passwd: "password2",

      // club
      club: {
        nombre : "club2",
        sede: "sede 2",
      } 
    }
    ];

  constructor() { }

  public setListaJugadores(lista:any[]){
    this.vJugadores=lista;
  }

  public getListaJugadores(){
    return this.vJugadores;
  }
}