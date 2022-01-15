import { Persona } from "./Persona";

export class Responsable extends Persona {

 constructor(){
     super();
     this.nombre = '';
     this.apellido = '';
     this.edad = 20;
     this.user= '';
     this.password='';
 }
}