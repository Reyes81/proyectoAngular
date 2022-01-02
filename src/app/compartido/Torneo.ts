import { Jugador } from '../compartido/Jugador';

export class Torneo {
    id: number;

    nombre: string;
    categoria: string;
    //jugadores: Arraylist<Jugador>; 
    jugadores: Jugador[];
    constructor(){
        this.id = -1;
        this.nombre = "";
        this.categoria = "";
        this.jugadores = [];

        }
    }