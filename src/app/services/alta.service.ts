import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListarJugadoresService } from './listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  jugador = {nombre: '',password: '',nocerrar:false};
  jugadores:Jugador[] =[];

  constructor(private listarJugadoresService:ListarJugadoresService) { }
   
    altaJugador(jugador:Jugador) {
      this.jugadores = this.listarJugadoresService.getListaJugadores();
      this.jugadores.push(jugador);
      this.listarJugadoresService.setListaJugadores(this.jugadores);
    }
    
}
