import { Component, OnInit } from '@angular/core';
import { Federacion } from '../compartido/Federacion';
import { ListarFederacionesService } from '../services/listar-federaciones.service';
@Component({
  selector: 'app-listar-federaciones',
  templateUrl: './listar-federaciones.component.html',
  styleUrls: ['./listar-federaciones.component.scss']
})
export class ListarFederacionesComponent implements OnInit {

  constructor(private listarFederacionesService:ListarFederacionesService) { }

  vFederaciones:Federacion[]= [];

  ngOnInit(): void {
    this.listarFederacionesService.getFederaciones().subscribe(federaciones=>this.vFederaciones=federaciones);
  }

}
