import { Injectable } from '@angular/core';
import { ListarJugadoresService } from './listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';

@Injectable({
  providedIn: 'root'
})
export class BajaService {

  vJugadores: Jugador[] = [];

  constructor(private listarJugadoresService:ListarJugadoresService) { }

  public bajaJugador(jugadorBaja:Jugador): void{

    this.vJugadores = this.listarJugadoresService.getListaJugadores();
    console.log("indice = " +jugadorBaja.id)
    let indice = -1;
    for(var i=0;i< this.vJugadores.length;i++){
      if(this.vJugadores[i].id == jugadorBaja.id){
        indice = i;
      }
    }
    this.vJugadores.splice(indice,1);
    this.listarJugadoresService.setListaJugadores(this.vJugadores);
  }
}
