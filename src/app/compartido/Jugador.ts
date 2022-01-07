//import * as internal from "stream";
import { Club } from "./Club";
import { Persona } from "./Persona";

export class Jugador extends Persona {
    id: number;

    responsable: string;
    categoria: string;
    moroso: boolean;
    club: Club
    multa: number;
    // Victorias, Derrotas, Empates
    record: number[];
    
    
    constructor(){
        super();
        this.id = -1;
        this.nombre = '';
        this.apellido = '';
        this.edad = 0;

        this.user = '';
        this.passwd = '';

        this.record = [0, 0, 0];
       
        this.responsable = '';
        this.categoria = '' ;
        this.moroso = false;
        this.club = new Club();

        this.multa = 0;
        
        }
    }
    