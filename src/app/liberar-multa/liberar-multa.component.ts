import { Component, OnInit } from '@angular/core';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { Jugador } from '../compartido/Jugador';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-liberar-multa',
  templateUrl: './liberar-multa.component.html',
  styleUrls: ['./liberar-multa.component.scss']
})
export class LiberarMultaComponent implements OnInit {
  multaForm!: FormGroup;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<LiberarMultaComponent>, private listarJugadoresService:ListarJugadoresService) { }

  vJugadores:Jugador[] = [];
  jugadorSeleccionado: Jugador = new Jugador();
  jugador: Jugador = new Jugador();

  erroresForm:any = {

    'jugador': '',

 

  };

  mensajesError:any = {

    'jugador': {
      'required':	'El jugador es obligatorio.',
              
      },
  
    
  
  
    };

  ngOnInit(): void {
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
    this.crearFormulario();
  }

  onSubmit(){
   
    // el || es porque puede dar jugador o no encontrarlo,(cosa imposible pero para typescript puede courrir)
    this.jugador = this.vJugadores.find(element => element.id == this.multaForm.value.jugador) || new Jugador();
    this.jugador.multa =  0;
    this.jugador.moroso = false;
    this.listarJugadoresService.setJugador(this.jugador).subscribe(producto => {this.jugador = producto});
    this.dialogRef.close(this.jugadorSeleccionado);
/*
    for(var i = 0; i < this.vJugadores.length; i++){
      if(this.vJugadores[i].nombre == this.jugadorSeleccionado.nombre){
        console.log("Multa =" + this.vJugadores[i].multa)
        this.vJugadores[i].multa = 0;
        this.vJugadores[i].moroso = false;

        //ADAPTAR A HTTP
        //this.listarJugadoresService.setListaJugadores(this.vJugadores);
        
        alert(this.vJugadores[i].multa);
        
      }
    }
    */
  }

  onChange(jg:Jugador){
    console.log(this.jugadorSeleccionado);
    this.jugadorSeleccionado = jg;
  }

  crearFormulario() 
  {
    this.multaForm = this.fb.group({
    jugador:  ['', Validators.required],
    
    });
  
    this.multaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
    }

    onCambioValor(data?: any) {
      
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
