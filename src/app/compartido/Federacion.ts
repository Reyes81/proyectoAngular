import { Club } from "./Club";
export class Federacion{

    nombre:string;
    presidente:string;
    numMax_clubes:number;
    id: number;
    clubes: Club[];

    constructor(){
        this.nombre = "";
        this.presidente = "";
        this.numMax_clubes  = -1;
        this.id = -1;
        this.clubes = [];


    }
}