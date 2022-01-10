export class Login{
    nombre:string;
    contrasenya: string;
    nocerrar: boolean;
    type:string;

    constructor(){
        this.nombre = '';
        this.contrasenya = '';
        this.nocerrar = false;
        this.type ='';
    }
}