import { Injectable } from '@angular/core';
import { Torneo } from '../compartido/Torneo';
import { Jugador } from '../compartido/Jugador';
import { ListarTorneosService } from '../services/listar-torneos.service';
import { ListarJugadoresService } from '../services/listar-jugadores.service';

@Injectable({
  providedIn: 'root'
})
export class ApuntarseTorneoService {

  torneo: Torneo = new Torneo();
  jugador: Jugador = new Jugador();
  vTorneos: Torneo[] = [];

  constructor(private listarTorneosService:ListarTorneosService, private listarJugadoresService:ListarJugadoresService) { }

  ngOnInit(): void {
    this.listarTorneosService.getTorneos().subscribe(torneos=>this.vTorneos=torneos);
  }

  apuntarJugadorTorneo(torneo: Torneo, jugador: Jugador): void{

    for(var i = 0; i < this.vTorneos.length; i++){
      if(this.vTorneos[i].nombre == torneo.nombre){
        this.vTorneos[i].jugadores.push(jugador);
        //this.listarTorneosService.setListaTorneos(this.vTorneos);
        alert("El jugador " + this.vTorneos[i].jugadores[this.vTorneos[i].jugadores.length -1].nombre + " se ha inscrito correctamente en el torneo " + torneo.nombre)
      }
    } 

  }
}
