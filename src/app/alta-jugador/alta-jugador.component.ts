import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AltaService } from '../services/alta.service';

@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrls: ['./alta-jugador.component.scss']
})
export class AltaJugadorComponent implements OnInit {

  jugador = {nombre: '', apellido: '', edad: 18, club: '',user: '',password: '', responsable: '' };
  
  constructor(public dialogRef: MatDialogRef<AltaJugadorComponent>,private alta: AltaService) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    //console.log("Usuario: ", this.usuario);
    //this.dialogRef.close(); 
    /*
    if (this.autenticarService.autenticar(this.usuario))
    {
      this.dialogRef.close(this.usuario);
    } 
    else {
      let usuario = {nombre: '', password: '', nocerrar: false};
      this.dialogRef.close(usuario);
    }
    */
}

}
