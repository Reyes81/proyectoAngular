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
  
    let existe:boolean = false;

    for(var i = 0; i < this.federacion.clubes.length; i++ ){
      if(this.federacion.clubes[i].nombre == this.club.nombre){
        existe = true;
        alert("El club de nombre " + this.club.nombre + "ya está inscrito en la " + this.vFederaciones[i].nombre_federacion + "Los clubes inscritos son: " + this.vClubes );
      }
      }
      if(existe == true){
        alert("El club existe");
      }
      else{
       
            this.federacion.clubes.push(this.club);
            alert(this.federacion.clubes.length);
            this.listarFederacionesService.addClub(this.federacion).subscribe(federacion => {this.federacion = federacion});;
            this.dialogRef.close();

          }
  }
}
