import { Entrenador } from "./Entrenador";
import { Jugador}  from "./Jugador";
import { Fecha } from "./Fecha";
import { Club } from "./Club";
 

export class Entrenamiento {
    id: number;
    jugadores:Jugador[];
    entrenador:Entrenador;
    reservado:boolean;
    fecha_reserva:Date;
    club:Club;

    
    constructor(){
        this.id = -1;
        this.entrenador = new Entrenador();
        this.jugadores = [];
        this.reservado=false;
        this.fecha_reserva = new Date();
        this.club = new Club();
        }
    }