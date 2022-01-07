import { Component, OnInit } from '@angular/core';
import { ListarClubesService } from '../services/listar-clubes.service';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';
import { Club } from '../compartido/Club';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-club',
  templateUrl: './cambiar-club.component.html',
  styleUrls: ['./cambiar-club.component.scss']
})
export class CambiarClubComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CambiarClubComponent>,private listarJugadoresService:ListarJugadoresService, private listarClubesService: ListarClubesService, private fb: FormBuilder) { 
    this.crearFormulario();
  }

  vJugadores:Jugador[] = []; 
  vClubes: Club[] = [];
  selJugador="Seleccione un jugador";

  jugadorSeleccionado:Jugador = new Jugador();
  
  clubOrigen: Club = new Club();
  clubDestino: Club = new Club();


  //añadir para formualrio
  consultaForm!: FormGroup;
  erroresForm:any = {

    'jugador': '',
    'club1': '',

    'club2': '',
  };

  mensajesError:any = {

    'jugador': {
      'required':	'El jugador es obligatorio.',
              
      },
  
      'club1': {
        'required':	'El nombre es obligatorio.',

        
  },

  'club2': {
    'required':	'El nombre es obligatorio.',

    
},

    };

  ngOnInit(): void {
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
    this.listarClubesService.getClubes().subscribe(clubes=>this.vClubes=clubes);
  }

  onSubmit() {

    this.clubDestino = this.vClubes.find(element => element.nombre == this.consultaForm.value.club2) || new Club();
    //console.log(this.clubDestino);
    
    if(this.clubOrigen.nombre == this.clubDestino.nombre){
      alert("Los clubes origen y destino deben ser diferentes");
    }
    
    else{
      // Obtenermos id de la respuesta
      this.jugadorSeleccionado.club = this.clubDestino;

      //ADAPTAR A HTTP

      this.listarJugadoresService.setJugador(this.jugadorSeleccionado).subscribe(producto => {this.jugadorSeleccionado = producto});
      
      alert("Cambio de club realizado correctamente");
      this.dialogRef.close(this.jugadorSeleccionado);
      
    }
    
   
  }

  ObtenerId(): number{
    const datos: string[] = this.jugadorSeleccionado.id.toString().split(" ");
    console.log("valor " + datos[datos.length-1]);
    return parseInt( datos[datos.length-1])
  }

  onChange(){
    this.jugadorSeleccionado = this.vJugadores.find(element => element.id == this.consultaForm.value.jugador) || new Jugador();
    this.consultaForm.value.nombre = this.jugadorSeleccionado.nombre;
    this.clubOrigen = this.vClubes.find(element => element.nombre == this.jugadorSeleccionado.club.nombre) || new Club();
    this.consultaForm.value.club1 = this.clubOrigen.nombre;
    
  }


  crearFormulario() 
  {
    this.consultaForm = this.fb.group({
      jugador:  ['', Validators.required],
      club1: '',
      club2:  ['', Validators.required],
      
    });
  }

  onCambioValor(data?: any) {
    console.log("cambio");
    if(!this.consultaForm) { return; }
    const form= this.consultaForm;
    for(const field in this.consultaForm) {
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
