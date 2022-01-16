import { Component, OnInit } from '@angular/core';
import{ faBars,faHome, faInfo, faList, faAddressCard,faSignInAlt} from'@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AltaJugadorComponent } from '../alta-jugador/alta-jugador.component';
import { BajaJugadorComponent } from '../baja-jugador/baja-jugador.component';
import { ApuntarseTorneoComponent } from '../apuntarse-torneo/apuntarse-torneo.component';
import { CambiarClubComponent } from '../cambiar-club/cambiar-club.component';
import { ListarFederacionesComponent } from '../listar-federaciones/listar-federaciones.component';
import { AltaClubFederacionComponent } from '../alta-club-federacion/alta-club-federacion.component';
import { ReservarEntrenamientoComponent } from '../reservar-entrenamiento/reservar-entrenamiento.component';
import { HostListener } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';
import { MultaJugadorComponent } from '../multa-jugador/multa-jugador.component';
import { LiberarMultaComponent } from '../liberar-multa/liberar-multa.component';
import { ModificarJugadorComponent } from '../modificar-jugador/modificar-jugador.component';
import { IntroducirResultadosComponent } from '../introducir-resultados/introducir-resultados.component';
import { PartidaTorneoComponent } from '../partida-torneo/partida-torneo.component';

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
  
  type:string;
  login = {nombre:'', password:'', type:'', nocerrar:false};
  //jugador = {}

  constructor(public dialogo: MatDialog, private autenticarService:AutenticarService) {
    this.autenticarService.getLogin().subscribe(login =>this.login=login);
    this.type= this.login.type;
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

  abrirFormularioCambiarClub() { 
      let dialogo = this.dialogo.open(CambiarClubComponent, {width: '500px', height: '450px'});
        //dialogo.afterClosed().subscribe(result =>this.login=result); 
      }
  abrirFormularioListarJugadores() { 
      let dialogo = this.dialogo.open(ListarJugadoresComponent, {width: '500px', height: '450px'});
        //dialogo.afterClosed().subscribe(result =>this.login=result); 
      }
  abrirFormularioApuntarseATorneo() { 
      let dialogo = this.dialogo.open(ApuntarseTorneoComponent, {width: '500px', height: '450px'});
        //dialogo.afterClosed().subscribe(result =>this.login=result);
      }

  abrirFormularioMultarJugador() { 
      let dialogo = this.dialogo.open(MultaJugadorComponent, {width: '500px', height: '450px'});
             //dialogo.afterClosed().subscribe(result =>this.login=result); 
        }

  abrirFormularioLiberarMultaJugador() { 
      let dialogo = this.dialogo.open(LiberarMultaComponent, {width: '500px', height: '450px'});
        //dialogo.afterClosed().subscribe(result =>this.login=result); 
      }

  abrirFormularioListarFederaciones() { 
     let dialogo = this.dialogo.open(ListarFederacionesComponent, {width: '500px', height: '450px'});
        //dialogo.afterClosed().subscribe(result =>this.login=result); 
  }
  abrirFormularioInscribirClubFederacion() { 
      let dialogo = this.dialogo.open(AltaClubFederacionComponent, {width: '500px', height: '450px'});
          //dialogo.afterClosed().subscribe(result =>this.login=result);
        }
  
  abrirFormularioReservarEntrenamiento() { 
      let dialogo = this.dialogo.open(ReservarEntrenamientoComponent, {width: '500px', height: '450px'});
          //dialogo.afterClosed().subscribe(result =>this.login=result);
        }

  abrirModificarJugador() { 
      let dialogo = this.dialogo.open(ModificarJugadorComponent, {width: '500px', height: '450px'});
         //dialogo.afterClosed().subscribe(result =>this.login=result);
      }
  abrirFormularioIntroducirResultados() { 
      let dialogo = this.dialogo.open(IntroducirResultadosComponent, {width: '500px', height: '450px'});
          //dialogo.afterClosed().subscribe(result =>this.login=result);
      }

      abrirFormularioPartidaTorneo() { 
        let dialogo = this.dialogo.open(PartidaTorneoComponent, {width: '500px', height: '450px'});
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

    obtenerUsuario(user:any){
      this.login = user;
      console.log(this.login);
    }

}
