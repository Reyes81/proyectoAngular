import { Club } from "./Club";
import { Persona } from "./Persona";

export class Jugador extends Persona {
    id: number;

    responsable: string;
    categoria: string;
    moroso: boolean;
    club: Club
    
  
    constructor(id: number, nombre:string, apellido:string, edad:number, club: Club, user:string, password: string, responsable: string, categoria:string){
        super();
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.user = user;
        this.passwd = password
       
        this.responsable = responsable;
        this.categoria = categoria ;
        this.moroso = false;
        this.club =  club;
        
        }
        

    }
    