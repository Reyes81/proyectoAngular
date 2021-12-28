import { Club } from "./Club";
import { Persona } from "./Persona";

export class Jugador extends Persona {
    id: number;
    
    
    categoria: string;
    moroso: boolean;
    club: Club
    

    constructor(){
        super();
        this.id = -1;
        this.nombre = "";
       
        this.categoria ="" ;
        this.moroso = true;
        this.club =  new Club();
        
        }
    }
    