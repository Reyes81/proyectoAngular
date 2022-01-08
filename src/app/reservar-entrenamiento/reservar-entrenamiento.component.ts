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

  ngOnInit(): void {
  }
  onSubmit() {
    alert( "Dia: " +  this.fecha_reserva.getDay().toString() + " Mes: " + (Number.parseInt(this.fecha_reserva.getMonth().toString()) + 1) +  " Año: " + this.fecha_reserva.getFullYear());
  }

}
