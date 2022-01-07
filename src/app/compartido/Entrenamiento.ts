import { Entrenador } from "./Entrenador";
import { Jugador}  from "./Jugador";


export class Entrenamiento {
    id: number;
    jugadores:Jugador[];
    entrenador:Entrenador;
    reservado:boolean;
    
    constructor(){
        this.id = -1;
        this.entrenador = new Entrenador();
        this.jugadores = [];
        this.reservado=false;
        }
    }