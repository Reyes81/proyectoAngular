import { Jugador } from "./Jugador";

export class Club{

    id:number;
    nombre:string;
    sede:string;
    //cuota:number;
    //jugadores:Jugador[] = [];
    //fechas_reservadas: Date[] = [];

    constructor(){
        this.id = -1;
        this.nombre = "";
        this.sede = "";
        //this.cuota = 0;
    }
}
