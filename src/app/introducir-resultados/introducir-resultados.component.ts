import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { JugadoresService } from '../services/jugadores.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

interface Result {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-introducir-resultados',
  templateUrl: './introducir-resultados.component.html',
  styleUrls: ['./introducir-resultados.component.scss']
})
export class IntroducirResultadosComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<IntroducirResultadosComponent>,private listarJugadoresService: JugadoresService) {
    this.crearFormulario();
   }

  vJugadores: Jugador[] = [];
  jugadorBlancas: Jugador = new Jugador();
  jugadorNegras: Jugador = new Jugador();
  //resultados: string[] = ['blancas', 'negras', 'tablas']
  resultado: string = '';

  resultados: Result[] = [
    {value: 'blancas', viewValue: 'Blancas'},
    {value: 'negras', viewValue: 'Negras'},
    {value: 'tablas', viewValue: 'Tablas'},
  ];

  partidaForm !: FormGroup;

  erroresForm:any = {

    'jugadorBlancas': '',

    'jugadorNegras': '',

    'ganador': '',

  };

  mensajesError:any = {

    'jugadorBlancas': {
      'required':	'El jugador de blancas es obligatorio.',
              
      },
  
    'jugadorNegras': {
  
      'required':	'El jugador de negras es obligatorio.',
      },

    'ganador': {
  
        'required':	'El jugador de negras es obligatorio.',
        },
  
  
    };


  ngOnInit(): void {
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
  }

  onSubmit(){
    
    const blancas = this.partidaForm.value.jugadorBlancas;
    const negras = this.partidaForm.value.jugadorNegras;
    this.resultado =  this.partidaForm.value.resultado;

    this.jugadorBlancas = this.vJugadores.find(element => element.id == blancas) || new Jugador();
    this.jugadorNegras = this.vJugadores.find(element => element.id == negras) || new Jugador();
    /*console.log(this.jugadorBlancas);
    console.log(this.jugadorNegras);
    console.log(this.resultado);*/

    switch(this.resultado.toLowerCase()){
      case 'blancas':
        this.jugadorBlancas.record[0] += 1;
        this.jugadorNegras.record[1] += 1;
        break;
      case("negras"):
        this.jugadorBlancas.record[1] += 1;
        this.jugadorNegras.record[0] += 1;
        break;
      case "tablas":
        this.jugadorBlancas.record[2] += 1;
        this.jugadorNegras.record[2] += 1;
        break;
    }

    this.listarJugadoresService.setJugador(this.jugadorBlancas).subscribe(producto => {this.jugadorBlancas = producto});
    this.listarJugadoresService.setJugador(this.jugadorNegras).subscribe(producto => {this.jugadorNegras = producto});
    this.dialogRef.close();
  }

  crearFormulario() 
  {
    this.partidaForm = this.fb.group({
    jugadorBlancas:  ['',Validators.required],
    jugadorNegras:  ['',Validators.required],
    resultado:  ['',Validators.required]
    });
  
    this.partidaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
    }

    onCambioValor(data?: any) {
     
      const form= this.partidaForm;
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
