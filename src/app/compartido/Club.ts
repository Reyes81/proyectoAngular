import { Jugador } from "./Jugador";

export class Club{

    id:string;
    nombre:string;
    sede:string;
    cuota:number;
    jugadores:Jugador[] = [];
    fechas_reservadas: Date[] = [];

    constructor(){
        this.id = "-1";
        this.nombre = "";
        this.sede = "";
        this.cuota = 0;
    }

    toString():String{
        return this.nombre;
    }
}
