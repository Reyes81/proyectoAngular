import { Component, OnInit } from '@angular/core';
import { Federacion } from '../compartido/Federacion';
import { FederacionesService } from '../services/federaciones.service';
@Component({
  selector: 'app-listar-federaciones',
  templateUrl: './listar-federaciones.component.html',
  styleUrls: ['./listar-federaciones.component.scss']
})
export class ListarFederacionesComponent implements OnInit {

  constructor(private listarFederacionesService:FederacionesService) { }

  vFederaciones:Federacion[]= [];
  errorMensaje:string = "";

  ngOnInit(): void {
    this.listarFederacionesService.getFederaciones().subscribe(federaciones=>this.vFederaciones=federaciones, errorMensaje=>this.errorMensaje= <any>errorMensaje);
  }

}
