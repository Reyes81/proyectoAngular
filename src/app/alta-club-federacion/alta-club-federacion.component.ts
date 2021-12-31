import { Component, OnInit } from '@angular/core';
import { Federacion } from '../compartido/Federacion';
import { Club } from '../compartido/Club';
import { AltaService } from '../services/alta.service';
import { ListarFederacionesService } from '../services/listar-federaciones.service';
import { ListarClubesService } from '../services/listar-clubes.service';

@Component({
  selector: 'app-alta-club-federacion',
  templateUrl: './alta-club-federacion.component.html',
  styleUrls: ['./alta-club-federacion.component.scss']
})
export class AltaClubFederacionComponent implements OnInit {

  constructor(private listarClubesService:ListarClubesService, private listarFederacionesService:ListarFederacionesService, private altaClubFederacionService:AltaService) { }

  vFederaciones = this.listarFederacionesService.getListaFederaciones();
  vClubes = this.listarClubesService.getListaClubes();

  federacion: Federacion = new Federacion();
  club: Club = new Club();

  ngOnInit(): void {
  }

  onSubmit() {
    this.altaClubFederacionService.altaClubFederacion(this.federacion, this.club);
  }

}
