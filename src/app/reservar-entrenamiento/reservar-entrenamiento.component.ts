import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Entrenador } from '../compartido/Entrenador';
import { Entrenamiento } from '../compartido/Entrenamiento';
import { EntrenamientoService } from '../services/entrenamiento.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservar-entrenamiento',
  templateUrl: './reservar-entrenamiento.component.html',
  styleUrls: ['./reservar-entrenamiento.component.scss']
})
export class ReservarEntrenamientoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReservarEntrenamientoComponent>, private entrenamientoService: EntrenamientoService,
              private _snackBar: MatSnackBar,) { }

  fecha_reserva:Date = new Date();
  hora_reserva:string= '';
  franjas_horarias:string[]=["10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00"];
  vEntrenamientos:Entrenamiento[] = [];
  entrenamiento: Entrenamiento = new Entrenamiento();

  ngOnInit(): void {
    this.entrenamientoService.getEntrenamientos().subscribe(entrenamientos => this.vEntrenamientos = entrenamientos);
  }
  onSubmit() {
    this.fecha_reserva.setHours(parseInt(this.hora_reserva),0,0);
    //alert( "Dia: " +  this.fecha_reserva.getDate().toString() + " Mes: " + (Number.parseInt(this.fecha_reserva.getMonth().toString()) + 1) +  " Año: " + this.fecha_reserva.getFullYear()+ "hora " + this.fecha_reserva.getHours().toString());
    //console.log(this.hora_reserva);
    
   
    this.entrenamiento.fecha_reserva = this.fecha_reserva;
    this.fecha_reserva.setHours(this.fecha_reserva.getHours() );
    this.entrenamiento.id = this.vEntrenamientos.length + 1;

    // 2022-01-13T15:00:00.000Z  
    const date = this.fecha_reserva.getFullYear() +'-'+Number.parseInt(this.fecha_reserva.getMonth().toString()) + 1 +'-'+
                this.fecha_reserva.getDate()+ "T"+ (this.fecha_reserva.getHours()-1) + ":00:00.000Z";

    console.log("fecha real : " + date)
   
    let iguales = false;
    this.vEntrenamientos.forEach(element => {
      console.log("fecha feka")
      console.log(element.fecha_reserva)
      if(date === element.fecha_reserva.toString()){
        iguales = true;

      }
    });
    if(!iguales){
      this.entrenamientoService.setEntrenamiento(this.entrenamiento).subscribe(result =>{});
      this.dialogRef.close();
    }else{
      this._snackBar.open('Seleccione otra fecha por favor, esta está reservada','OK ', {
        duration: 3000
          });
  
    }
      
    
  }

}
