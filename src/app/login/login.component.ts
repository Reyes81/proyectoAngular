import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AutenticarService } from '../services/autenticar.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Login } from '../compartido/Login';
import { Jugador } from '../compartido/Jugador';
import { JugadoresService } from '../services/jugadores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //usuario = {nombre: '', password: '', nocerrar: false};

  loginForm !: FormGroup;
  consulta:Login;
  vJugadores:Jugador[] = [];
  erroresForm:any = {

    'nombre': '',

    'password': '',

    'nocerrar': '',

  };

  mensajesError:any = {

    'nombre': {
	'required':	'El nombre es obligatorio.',

      			'minlength':     'El nombre debe tener una longitud mínima de 2 caracteres.',

      			'maxlength':     'El nombre no puede exceder de 25 caracteres.'
    },

    	'password': {

      			'required':      'La contraseña es obligatoria.',

      			'minlength':     'La contraseña debe tener una longitud mínima de 2 caracteres.',

      			'maxlength':     'La contraseña no pueden exceder de 25 caracteres.'
    },


  };
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>,private autenticarService: AutenticarService, private listarJugadores: JugadoresService) { 
    this.crearFormulario();
    this.consulta = new Login();
  }

  ngOnInit(): void {
    this.listarJugadores.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
    
  }


  crearFormulario()
  {
    this.loginForm= this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      nocerrar: false,
      
      });

      this.loginForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
      this.onCambioValor();
  
      
  }

    onSubmit() {

      this.consulta = this.loginForm.value;
      console.log(this.consulta);

      
      
      if (this.autenticarService.autenticar(this.consulta))
      {
            this.dialogRef.close(this.consulta);
      }

      this.loginForm.reset({
        nombre:'',
        contrasenya: '',
        nocerrar: false
      });
       
    }

    onCambioValor(data?: any) {
      
      if(!this.loginForm) { return; }
      const form= this.loginForm;
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
