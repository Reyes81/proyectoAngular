import { Component, OnInit } from '@angular/core';
import { Jugador } from '../compartido/Jugador';
import { ListarJugadoresService } from '../services/listar-jugadores.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-introducir-resultados',
  templateUrl: './introducir-resultados.component.html',
  styleUrls: ['./introducir-resultados.component.scss']
})
export class IntroducirResultadosComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<IntroducirResultadosComponent>,private listarJugadoresService: ListarJugadoresService) {
    this.crearFormulario();
   }

  vJugadores: Jugador[] = [];
  jugadorBlancas: Jugador = new Jugador();
  jugadorNegras: Jugador = new Jugador();
  resultados: string[] = ['blancas', 'negras', 'tablas']
  resultado: string = '';

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
  
  
    };


  ngOnInit(): void {
    this.listarJugadoresService.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
  }

  onSubmit(){
    
    const blancas = this.partidaForm.value.jugadorBlancas;
    const negras = this.partidaForm.value.jugadorNegras;
    console.log(this.partidaForm.value);



    if(this.resultado == 'blancas'){
      this.jugadorBlancas = this.vJugadores.find(element => element.id == blancas) || new Jugador();
      this.jugadorBlancas.record[0]++;
      this.jugadorNegras = this.vJugadores.find(element => element.id == negras) || new Jugador();
      this.jugadorNegras.record[1]++;

    }
    else if(this.resultado == 'negras') {
      this.jugadorBlancas = this.vJugadores.find(element => element.id == blancas) || new Jugador();
      this.jugadorBlancas.record[1]++;
      this.jugadorNegras = this.vJugadores.find(element => element.id == negras) || new Jugador();
      this.jugadorNegras.record[0]++;
    }
    else if(this.resultado == 'tablas') {
      this.jugadorBlancas = this.vJugadores.find(element => element.id == blancas) || new Jugador();
      this.jugadorBlancas.record[2]++;
      this.jugadorNegras = this.vJugadores.find(element => element.id == negras) || new Jugador();
      this.jugadorNegras.record[2]++;
    }
      this.partidaForm.reset({
        jugadorBlancas: '',
        jugadorNegras: '',
        ganador: false
        });
  }

  crearFormulario() 
  {
    this.partidaForm = this.fb.group({
    jugadorBlancas:  ['', Validators.required],
    jugadorNegras:  ['', Validators.required],
    resultado:  ['', Validators.required]
    });
  
    this.partidaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
    }

    onCambioValor(data?: any) {
      if(!this.partidaForm) { 
        return; 
      }
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
