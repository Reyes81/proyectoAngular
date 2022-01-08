import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reservar-entrenamiento',
  templateUrl: './reservar-entrenamiento.component.html',
  styleUrls: ['./reservar-entrenamiento.component.scss']
})
export class ReservarEntrenamientoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReservarEntrenamientoComponent>) { }

  fecha_reserva:Date = new Date();
  hora_reserva:string= '';
  franjas_horarias:string[]=["10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00"];

  ngOnInit(): void {
  }
  onSubmit() {
    this.fecha_reserva.setHours(parseInt(this.hora_reserva),0,0);
    alert( "Dia: " +  this.fecha_reserva.getDate().toString() + " Mes: " + (Number.parseInt(this.fecha_reserva.getMonth().toString()) + 1) +  " Año: " + this.fecha_reserva.getFullYear()+ "hora " + this.fecha_reserva.getHours().toString());
    console.log(this.hora_reserva)
  }

}
