import { Component, OnInit } from '@angular/core';
import { Partida } from '../compartido/partida';
import { Torneo } from '../compartido/Torneo';
import { TorneosService } from '../services/torneos.service';
import { PartidasService } from '../services/partida.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-partida-torneo',
  templateUrl: './partida-torneo.component.html',
  styleUrls: ['./partida-torneo.component.scss']
})
export class PartidaTorneoComponent implements OnInit {

  vTorneos: Torneo[] = [];
  vPartidas: Partida[] = [];
  partida:Partida = new Partida();
  torneo:Torneo = new Torneo();
  constructor(public dialogRef: MatDialogRef<PartidaTorneoComponent>,private listarTorneosService: TorneosService, private listarPartidas: PartidasService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarTorneosService.getTorneos().subscribe(torneos=>this.vTorneos=torneos);
    this.listarPartidas.getPartidas().subscribe(partidas=>this.vPartidas=partidas);

  }

  onSubmit(){
    console.log("toneo");
    console.log(this.torneo);
    console.log("partida");
    console.log(this.partida);

    let iguales = false;
    this.torneo.partidas.forEach( element =>{
      if(element.id == this.partida.id){
        iguales = true;
      }
    }
      )
    if(!iguales){
      this.torneo.partidas.push(this.partida);
      this.listarTorneosService.updateTorneo(this.torneo).subscribe(torneo =>{this.torneo=torneo});
      this._snackBar.open('Partida añadida correctamente','OK ', {
        duration: 3000
      });
      this.dialogRef.close();
    }else{
      this._snackBar.open('Seleccione otra fecha por favor, esta está reservada','OK ', {
        duration: 3000
      });
    }
  }
}