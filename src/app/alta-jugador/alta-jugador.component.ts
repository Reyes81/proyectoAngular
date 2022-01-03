import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AltaService } from '../services/alta.service';
import { Jugador } from '../compartido/Jugador';
import { ListarClubesService } from '../services/listar-clubes.service';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Club } from '../compartido/Club';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrls: ['./alta-jugador.component.scss']
})
export class AltaJugadorComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AltaJugadorComponent>,private altaJugadorService: AltaService, private listarJugadoresService: ListarJugadoresService, private listarClubesService: ListarClubesService) {
    this.crearFormulario();
    
   }

  vJugadores = this.listarJugadoresService.getListaJugadores();
  vClubes = this.listarClubesService.getListaClubes();

  vCategorias: string[] = ["Junior", "Senior"];
  jugador = { nombre: '', apellido: '', edad: 18, club:  new Club(), user: '',password: '', responsable: '', categoria: ''};
  id:number = this.vJugadores.length +1;
  club:Club = new Club();

  // anyadir para cambiar formulario
  consultaForm!: FormGroup;

  erroresForm:any = {

    'nombre': '',

    'apellido': '',

    'edad': '',

    'club': '',

    'categoria': '',

    'user': '',

    'password': '',




  };

  mensajesError:any = {

    'nombre': {
	        'required':	'El nombre es obligatorio.',

      		
    },

    'apellido': {
      'required':	'El nombre es obligatorio.',

      
},

  'edad': {

        'required':      'La contraseña es obligatoria.',

},

'club': {
  'required':	'El nombre es obligatorio.',

  
},

'categoria': {

    'required':      'La contraseña es obligatoria.',

},

'user': {
'required':	'El nombre es obligatorio.',


},

'password': {

'required':      'La contraseña es obligatoria.',

},


  };

  ngOnInit(): void {
  }
  onSubmit() {
    //console.log("jugador añadido = " + this.jugador.club.nombre);
    //this.club.nombre = this.jugador.club.nombre;

    // añandir para cambiar formulario
    this.jugador = this.consultaForm.value;

    console.log(this.jugador);
    const id:number = this.listarJugadoresService.getListaJugadores().length +1;
 
    //const newJugador= new Jugador(this.id,this.jugador.nombre, this.jugador.apellido, this.jugador.edad, this.club, this.jugador.user,this.jugador.password, this.jugador.responsable,this.jugador.categoria);
    this.altaJugadorService.altaJugador(id,this.jugador.nombre, this.jugador.apellido, this.jugador.edad, this.club, this.jugador.user,this.jugador.password, this.jugador.responsable,this.jugador.categoria);
    //this.dialogRef.close();
    // Hacer que se cierre al insertar

    this.consultaForm.reset({
      nombre: '',
      apellido: '',
      edad: 18,
      club: '',
      categoria: this.vCategorias[0],
      user: '',
      password: '',
      responsable:''
      });
      
   
  }


  crearFormulario() 
{
  this.consultaForm = this.fb.group({
  nombre:  ['', Validators.required],
  apellido:  ['', Validators.required],
  edad:  [18, Validators.required],
  club:  '',
  categoria: this.vCategorias[0],
  user: ['', Validators.required],
  password:  ['', Validators.required],
  responsable:'' 
  });

  this.consultaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
  this.onCambioValor();
  }


  onCambioValor(data?: any) {
    
    this.jugador = this.consultaForm.value;
    if(!this.consultaForm) { return; }
    const form= this.consultaForm;
    for(const field in this.erroresForm) {
    // Se borrarán los mensajes de error previos
    this.erroresForm[field] = '';
    const control = form.get(field);
    if(control && control.dirty&& !control.valid) {
    const messages= this.mensajesError[field];
    for(const key in control.errors) {
    this.erroresForm[field] += messages[key] + ' ';
    }
    }
    }
    }

}
