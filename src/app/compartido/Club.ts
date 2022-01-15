import { Entrenador } from "./Entrenador";
import { Fecha } from "./Fecha";
import { Federacion } from "./Federacion";
import { Gerente } from "./Gerente";
import { Jugador } from "./Jugador";

export class Club{

    id:string;
    nombre:string;
    sede:string;
    cuota:number;
    jugadores:Jugador[] = [];
    fechasReservadas: Fecha[] = [];
    entrenador:Entrenador;
    federacion:Federacion;
    gerente:Gerente = new Gerente(this);

    constructor(){
        this.id = "-1";
        this.nombre = "";
        this.sede = "";
        this.cuota = 0;
        this.entrenador = new Entrenador();
        this.federacion = new Federacion();
       

    }

     letra():String{
        return "{\"nombre\":\""+this.nombre +"\",\"sede\":\""+this.sede +"\",\"cuota\":\""+this.cuota +"\", \"id\":\""+this.id +"\", \"fechasReservadas\":\""+this.fechasReservadas +"\",\"jugadores\":\""+this.jugadores +"\" }";
    }
}