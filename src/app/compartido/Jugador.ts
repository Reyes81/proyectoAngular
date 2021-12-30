import { Club } from "./Club";
import { Persona } from "./Persona";

export class Jugador extends Persona {
    id: number;

    responsable: string;
    categoria: string;
    moroso: boolean;
    club: Club
    
    
    constructor(){
        super();
        this.id = -1;
        this.nombre = '';
        this.apellido = '';
        this.edad = 0;

        this.user = '';
        this.passwd = '';
       
        this.responsable = '';
        this.categoria = '' ;
        this.moroso = false;
        this.club = new Club();
        
        }
        

    }
    