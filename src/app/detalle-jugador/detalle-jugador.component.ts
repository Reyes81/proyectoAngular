import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AltaService } from '../services/alta.service';
import { Jugador } from '../compartido/Jugador';
import { ListarClubesService } from '../services/listar-clubes.service';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Club } from '../compartido/Club';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaJugadorComponent } from '../alta-jugador/alta-jugador.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detalle-jugador',
  templateUrl: './detalle-jugador.component.html',
  styleUrls: ['./detalle-jugador.component.scss']
})
export class DetalleJugadorComponent implements OnInit {

  constructor(private fb: FormBuilder,private altaJugadorService: AltaService, 
              private listarJugadoresService: ListarJugadoresService, private listarClubesService: ListarClubesService,
              private router:Router, private route:ActivatedRoute,public dialog: MatDialog) { 
    this.id = parseInt(this.route.snapshot.paramMap.get('id')|| '');
    this.listarJugadoresService.getJugador(this.id).subscribe(jugador=>this.jugador=jugador);
    console.log(this.jugador);
    this.crearFormulario();
   
    // cambiar por observables o no en función del tiempo
    
    
  }

  vJugadores:Jugador[] = [];
  vClubes = this.listarClubesService.getListaClubes();

  vCategorias: string[] = ["Junior", "Senior"];
  jugador:Jugador = new Jugador();
  id:any = 0;
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
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores)
    //this.route.params.pipe(switchMap((params: Params) => this.listarJugadoresService.getJugador(+params['id'])));
    this.id = parseInt(this.route.snapshot.paramMap.get('id')|| '');
    this.listarJugadoresService.getJugador(this.id).subscribe(jugador=>this.jugador=jugador);
    this.jugador.id = this.id;
    console.log(this.jugador);
    this.crearFormulario();

  }
  onSubmit() {

    // añandir para cambiar formulario
    this.jugador = this.consultaForm.value;

    console.log(this.jugador);
    
    this.listarJugadoresService.ModifJugador(this.id, this.jugador);
    // Hacer que se cierre al insertar

    
      
   
  }

  crearFormulario() 
{

  console.log("formulario " + this.jugador.nombre)
  this.consultaForm = this.fb.group({
  nombre:  [this.jugador.nombre, Validators.required],
  apellido:  [this.jugador.apellido, Validators.required],
  edad:  [this.jugador.edad, Validators.required],
  club:  this.jugador.club,
  categoria: this.vCategorias[0],
  user: [this.jugador.user, Validators.required],
  password:  [this.jugador.passwd, Validators.required],
  responsable:this.jugador.responsable
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


    volver():void{
      //this.dialog.closeAll();
      this.router.navigate(["/inicio"]);
    }


}


