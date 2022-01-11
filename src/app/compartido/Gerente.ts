import { Club } from "./Club";
import { Persona } from "./Persona";

export class Gerente extends Persona {
    
    id: number;
    nomina: number;
    nominas: number[];
    IRPF:number;
    retenciones:number[];
    clubes: Club[];
    club_actual:Club;
    
    constructor(){
        super();
        this.id = -1;
        this.nombre = '';
        this.apellido = '';
        this.edad = 0;

        this.user = '';
        this.passwd = '';

        this.clubes = [];

        this.nomina=0;
        this.nominas=[];
        this.IRPF=0;
        this.retenciones=[];
        this.club_actual= new Club();
        }
    }
