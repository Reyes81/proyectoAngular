import { Component, OnInit } from '@angular/core';
import { Federacion } from '../compartido/Federacion';
import { Club } from '../compartido/Club';
import { AltaService } from '../services/alta.service';
import { FederacionesService } from '../services/federaciones.service';
import { ClubesService } from '../services/clubes.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alta-club-federacion',
  templateUrl: './alta-club-federacion.component.html',
  styleUrls: ['./alta-club-federacion.component.scss']
})
export class AltaClubFederacionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AltaClubFederacionComponent>,private listarClubesService:ClubesService, private listarFederacionesService:FederacionesService, private altaClubFederacionService:AltaService) { }

  vFederaciones: Federacion[] = [];
  vClubes:Club[] =[];

  federacion: Federacion = new Federacion();
  club: Club = new Club();

  ngOnInit(): void {
    this.listarFederacionesService.getFederaciones().subscribe(federaciones=>this.vFederaciones=federaciones);
    this.listarClubesService.getClubes().subscribe(clubes=>this.vClubes=clubes);
  }

  onSubmit() {
  
    alert(this.federacion.clubes.length);
    if(this.federacion.clubes.length==0)
    {
      this.altaClubFederacionService.altaClubFederacion(this.federacion, this.club);
      this.dialogRef.close(this.club.nombre);
    }
    else{
    for(var i = 0; i < this.federacion.clubes.length; i++ ){
        if(this.federacion.clubes[i].nombre == this.club.nombre){
          alert("El club de nombre " + this.club.nombre + "ya está inscrito en la " + this.vFederaciones[i].nombre );
        }
        else{
          this.altaClubFederacionService.altaClubFederacion(this.federacion, this.club);
          this.dialogRef.close(this.club.nombre);
        }
      }
    }
  }
}
