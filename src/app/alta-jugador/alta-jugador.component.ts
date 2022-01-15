import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AltaService } from '../services/alta.service';
import { Jugador } from '../compartido/Jugador';
import { ClubesService } from '../services/clubes.service';
import { JugadoresService } from '../services/jugadores.service';
import { Club } from '../compartido/Club';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Responsable } from '../compartido/Responsable';


@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrls: ['./alta-jugador.component.scss']
})
export class AltaJugadorComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AltaJugadorComponent>,private altaJugadorService: AltaService, private listarJugadoresService: JugadoresService, private listarClubesService: ClubesService) {
    this.crearFormulario();
    
   }

  vJugadores:Jugador[] = [];
  vClubes:Club[] = [];
  errorMensaje: string = "";
  vCategorias: string[] = ["Junior", "Senior"];
  jugador = { nombre: '', apellido: '', edad: 18, club:  new Club(), user: '',password: '', responsable: '', categoria: ''};
  id:number = this.vJugadores.length +1;
  club:Club = new Club();
  newJugador:Jugador =new Jugador();

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
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
    this.listarClubesService.getClubes().subscribe(clubes=>this.vClubes=clubes);
  }
  onSubmit() {
    //console.log("jugador añadido = " + this.jugador.club.nombre);
    //this.club.nombre = this.jugador.club.nombre;

    // añandir para cambiar formulario
    this.jugador = this.consultaForm.value;

    this.newJugador.id = 5;
    this.newJugador.nombre = this.jugador.nombre;
    this.newJugador.apellido = this.jugador.apellido;
    this.newJugador.edad = this.jugador.edad;
    // para obtener bien el clib y añadirlo correctamente a la BD
    this.club = this.vClubes.find(element => element.nombre == this.consultaForm.value.club) || new Club();
    this.newJugador.club = this.club;
    this.newJugador.categoria = this.jugador.categoria
    this.newJugador.user = this.jugador.user;
    this.newJugador.password = this.jugador.password;
    this.newJugador.multa = 0;
    this.newJugador.moroso = false;
 
    this.newJugador.responsable = this.jugador.responsable;
    this.newJugador.record = [0,0,0];

    console.log(this.newJugador);
    this.altaJugadorService.setJugador(this.newJugador).subscribe(errorMensaje => this.errorMensaje = <any>errorMensaje);
    
    
    

    //this.altaJugadorService.setJugador(this.newJugador);
    this.listarJugadoresService.addPlayer();
    console.log("identificador del servicio " + this.listarJugadoresService.getId())

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

      this.dialogRef.close();
   
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
