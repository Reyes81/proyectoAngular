import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-multa-jugador',
  templateUrl: './multa-jugador.component.html',
  styleUrls: ['./multa-jugador.component.scss']
})
export class MultaJugadorComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<MultaJugadorComponent>,private listarJugadoresService: ListarJugadoresService) { 
    this.crearFormulario();
  }
  

  jugador: Jugador = new Jugador();
  vJugadores: Jugador [] = this.listarJugadoresService.getListaJugadores();
  multa:number = 0;

  multaForm !: FormGroup;

  erroresForm:any = {

    'jugador': '',

    'multa': '',

  };

  mensajesError:any = {

  'jugadorSeleccionado': {
	  'required':	'El jugador es obligatorio.',
      			
    },

  'multa': {

    'required': 'El importe de la multa es obligatorio',
    },


  };

  ngOnInit(): void {
  }

  onSubmit(){
    
    //this.jugador = this.multaForm.value;
    const nombre = this.multaForm.value.jugador;
    console.log(this.multaForm.value);
    for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].nombre == nombre)
      {
        this.vJugadores[i].multa +=  this.multaForm.value.multa;
        this.vJugadores[i].moroso = true;
        this.listarJugadoresService.setListaJugadores(this.vJugadores);
        alert("Multas del jugador " + this.vJugadores[i].nombre + "=" +this.vJugadores[i].multa + "€");
        this.dialogRef.close(this.jugador);
      }
    
      this.multaForm.reset({
        jugador: '',
        multa: 0
        });
  }

  crearFormulario() 
  {
    this.multaForm = this.fb.group({
    jugador:  ['', Validators.required],
    multa:  [0, Validators.required]
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

    close(){
      this.dialogRef.close();
    }
}
