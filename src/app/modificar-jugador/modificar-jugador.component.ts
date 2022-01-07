import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { Jugador } from '../compartido/Jugador';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubesService } from '../services/clubes.service';
import { Club } from '../compartido/Club';

@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.scss']
})
export class ModificarJugadorComponent implements OnInit {

  multaForm!: FormGroup;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<ModificarJugadorComponent>, private listarJugadoresService:JugadoresService,private listarClubesService: ClubesService) { }

  vJugadores:Jugador[] = [];
  vClubes:Club[] = [];
  vCategorias: string[] = ["Junior", "Senior"];
  jugadorSeleccionado!: Jugador;
  jugador: Jugador = new Jugador();
  club: Club = new Club();

  erroresForm:any = {

    'jugador': '',
    'nombre': '',

    'apellido': '',

    'edad': '',

    'club': '',

    'categoria': '',

    'user': '',

    'password': '',

 

  };

  mensajesError:any = {

    'jugador': {
      'required':	'El jugador es obligatorio.',
              
      },
  
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
    
    this.crearFormulario();
    console.log(this.jugador);
  }

  onChange(){
    this.jugador = this.vJugadores.find(element => element.id == this.multaForm.value.jugador) || new Jugador();
    this.multaForm.value.nombre = this.jugador.nombre;
    console.log(this.jugador);
  }

  onSubmit(){
   
    // el || es porque puede dar jugador o no encontrarlo,(cosa imposible pero para typescript puede courrir)
    this.jugador = this.vJugadores.find(element => element.id == this.multaForm.value.jugador) || new Jugador();
    // para obtener bien el clib y añadirlo correctamente a la BD
    this.club = this.vClubes.find(element => element.nombre == this.multaForm.value.club) || new Club();
    this.jugador.nombre = this.multaForm.value.nombre;
    this.jugador.apellido = this.multaForm.value.apellido;
    this.jugador.edad = this.multaForm.value.edad;
    this.jugador.club = this.club;
    this.jugador.categoria = this.multaForm.value.categoria;
    this.jugador.user = this.multaForm.value.user;
    this.jugador.passwd = this.multaForm.value.password;
    this.jugador.responsable = this.multaForm.value.responsable;


    console.log(this.jugador);
    console.log(this.club);
   
    this.listarJugadoresService.setJugador(this.jugador).subscribe(producto => {this.jugador = producto});
    this.dialogRef.close(this.jugadorSeleccionado);

   
  }

  

  crearFormulario() 
  {
    this.multaForm = this.fb.group({
    jugador:  ['', Validators.required],
    nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [18, Validators.required],
      club: ['', Validators.required],
      categoria: [this.vCategorias[0], Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
      responsable:['']
    });
  
    this.multaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
    }

    onCambioValor(data?: any) {
      console.log("cambio");
      if(!this.multaForm) { return; }
      const form= this.multaForm;
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
