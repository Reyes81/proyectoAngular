//import * as internal from "stream";
import { Club } from "./Club";
import { Persona } from "./Persona";
import { Partida } from "./partida";
import { Responsable } from "./Responsable";

export class Jugador extends Persona {
    id: number;

    responsable: string;
    categoria: string;
    moroso: boolean;
    club: Club
    multa: number;
    // Victorias, Derrotas, Empates
    record: number[];
    partidas: Partida[];
    clubes: Club[];
    
    constructor(){
        super();
        this.id = -1;
        this.nombre = '';
        this.apellido = '';
        this.edad = 0;

        this.user = '';
        this.password = '';

        this.record = [0, 0, 0];
       
        this.responsable = '';
        this.categoria = '' ;
        this.moroso = false;
        this.club = new Club();

        this.multa = 0.0;
        this.partidas = [];
        this.clubes = [];
        
        
        }
    }
    