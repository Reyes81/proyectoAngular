import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reservar-entrenamiento',
  templateUrl: './reservar-entrenamiento.component.html',
  styleUrls: ['./reservar-entrenamiento.component.scss']
})
export class ReservarEntrenamientoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReservarEntrenamientoComponent>) { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
