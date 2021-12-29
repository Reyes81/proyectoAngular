import { Component, OnInit } from '@angular/core';
import{ faBars,faHome, faInfo, faList, faAddressCard,faSignInAlt} from'@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AltaJugadorComponent } from '../alta-jugador/alta-jugador.component';
import { BajaJugadorComponent } from '../baja-jugador/baja-jugador.component';

import { HostListener } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})

export class CabeceraComponent implements OnInit {
  faHome = faHome;
  faInfo = faInfo;
  faList = faList;
  faAddressCard = faAddressCard;
  faBars= faBars;
  faSignInAlt = faSignInAlt;

  login = {nombre:'', password:'', nocerrar:false};
  //jugador = {}

  constructor(public dialogo: MatDialog, private autenticarService:AutenticarService) {
    this.autenticarService.getLogin().subscribe(login =>this.login=login);
   }

  ngOnInit(): void {
  }

  abrirFormularioLogin() { 
    let dialogo = this.dialogo.open(LoginComponent, {width: '500px', height: '450px'});
    dialogo.afterClosed().subscribe(result =>this.login=result); 
    }
  
  abrirFormularioAltaJugador() { 
      let dialogo = this.dialogo.open(AltaJugadorComponent, {width: '500px', height: '450px'});
      //dialogo.afterClosed().subscribe(result =>this.login=result); 
      }

    abrirFormularioBajaJugador() { 
      let dialogo = this.dialogo.open(BajaJugadorComponent, {width: '500px', height: '450px'});
      //dialogo.afterClosed().subscribe(result =>this.login=result); 
      }
  abrirFormularioListarJugadores() { 
        let dialogo = this.dialogo.open(ListarJugadoresComponent, {width: '500px', height: '450px'});
        //dialogo.afterClosed().subscribe(result =>this.login=result); 
        }

  cerrarSesion(){
    this.autenticarService.cerrarSesion().subscribe(login=>this.login=login);
    return false;
  }

  @HostListener('window:storage', ['$event'])
    procesar() {
      this.autenticarService.getLogin().subscribe(login => this.login = login);
    }    

}
