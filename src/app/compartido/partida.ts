import { Jugador } from '../compartido/Jugador';

export class Partida {
    id: number;
    jugadorBlancas: Jugador;
    jugadorNegras: Jugador;
    constructor(){
        this.id = -1;
        this.jugadorBlancas = new Jugador;
        this.jugadorNegras = new Jugador;
        }
    }