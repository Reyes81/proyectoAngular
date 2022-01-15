import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { JugadoresService } from '../services/jugadores.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-multa-jugador',
  templateUrl: './multa-jugador.component.html',
  styleUrls: ['./multa-jugador.component.scss']
})
export class MultaJugadorComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<MultaJugadorComponent>,private listarJugadoresService: JugadoresService) { 
    this.crearFormulario();
  }
  

  jugador: Jugador = new Jugador();
  vJugadores: Jugador [] = [];
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
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
  }

  onSubmit(){
    
    //this.jugador = this.multaForm.value;
    const ident = this.multaForm.value.jugador;
    console.log(this.multaForm.value);

    // el || es porque puede dar jugador o no encontrarlo,(cosa imposible pero para typescript puede courrir)
    this.jugador = this.vJugadores.find(element => element.id == ident) || new Jugador();
    this.jugador.multa =  this.multaForm.value.multa/2;
    this.jugador.moroso = true;
    this.listarJugadoresService.setJugador(this.jugador).subscribe(producto => {this.jugador = producto});
    //alert("Multas del jugador " + this.vJugadores[i].nombre + "=" +this.vJugadores[i].multa + "€");
    this.dialogRef.close(this.jugador);

    // anterior(cuando funcione del todo borrar)
    //console.log(found);
   /* for(var i = 0; i< this.vJugadores.length; i++)
      if(this.vJugadores[i].id == nombre)
      {
        let jugador = this.vJugadores[i];
        jugador.multa +=  this.multaForm.value.multa;
        jugador.moroso = true;

        //ADAPTAR A HTTP
        //this.listarJugadoresService.setListaJugadores(this.vJugadores);
        this.listarJugadoresService.setJugador(jugador).subscribe(producto => {this.jugador = producto});;
        //alert("Multas del jugador " + this.vJugadores[i].nombre + "=" +this.vJugadores[i].multa + "€");
        this.dialogRef.close(this.jugador);
      }
    */
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
