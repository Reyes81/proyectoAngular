import { Component, OnInit } from '@angular/core';
import { Federacion } from '../compartido/Federacion';
import { Club } from '../compartido/Club';
import { AltaService } from '../services/alta.service';
import { ListarFederacionesService } from '../services/listar-federaciones.service';
import { ListarClubesService } from '../services/listar-clubes.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alta-club-federacion',
  templateUrl: './alta-club-federacion.component.html',
  styleUrls: ['./alta-club-federacion.component.scss']
})
export class AltaClubFederacionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AltaClubFederacionComponent>,private listarClubesService:ListarClubesService, private listarFederacionesService:ListarFederacionesService, private altaClubFederacionService:AltaService) { }

  vFederaciones = this.listarFederacionesService.getListaFederaciones();
  vClubes = this.listarClubesService.getListaClubes();

  federacion: Federacion = new Federacion();
  club: Club = new Club();

  ngOnInit(): void {
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