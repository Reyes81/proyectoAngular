import { Jugador } from '../compartido/Jugador';
import { Partida } from '../compartido/partida';

export class Torneo {
    id: number;

    nombre: string;
    categoria: string;
    //jugadores: Arraylist<Jugador>; 
    jugadores: Jugador[];
    partidas: Partida[];
    constructor(){
        this.id = -1;
        this.nombre = "";
        this.categoria = "";
        this.jugadores = [];
        this.partidas = [];
        
        }
    }