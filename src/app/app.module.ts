import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule} from'@angular/platform-browser/animations';
import{ MatToolbarModule} from'@angular/material/toolbar';
import{ FlexLayoutModule} from'@angular/flex-layout';
import{ FontAwesomeModule} from'@fortawesome/angular-fontawesome';
import { MatListModule} from '@angular/material/list';
import{ AppRoutingModule} from'./app-routing/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule }from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcesaHTTPMsjService } from './services/procesa-httpmsj.service';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { AutenticarService } from './services/autenticar.service';
import { AltaService } from './services/alta.service';
import { BajaService } from './services/baja.service';
import { JugadoresService } from './services/jugadores.service';
import { ClubesService } from './services/clubes.service';
import { TorneosService } from './services/torneos.service';
import { FederacionesService } from './services/federaciones.service';

import { AppComponent } from './app.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AltaJugadorComponent } from './alta-jugador/alta-jugador.component';
import { ListarJugadoresComponent } from './listar-jugadores/listar-jugadores.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BajaJugadorComponent } from './baja-jugador/baja-jugador.component';
import { CambiarClubComponent } from './cambiar-club/cambiar-club.component';
import { ListarFederacionesComponent } from './listar-federaciones/listar-federaciones.component';
import { AltaClubFederacionComponent } from './alta-club-federacion/alta-club-federacion.component';
import { ReservarEntrenamientoComponent } from './reservar-entrenamiento/reservar-entrenamiento.component';
import { MultaJugadorComponent } from './multa-jugador/multa-jugador.component';
import { LiberarMultaComponent } from './liberar-multa/liberar-multa.component';
import { ApuntarseTorneoComponent } from './apuntarse-torneo/apuntarse-torneo.component';
import { DetalleJugadorComponent } from './detalle-jugador/detalle-jugador.component';
import { baseURL } from './compartido/baseurl';
import { ModificarJugadorComponent } from './modificar-jugador/modificar-jugador.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IntroducirResultadosComponent } from './introducir-resultados/introducir-resultados.component';
import { ChatService } from './services/chat.service';
import { AtencionComponent } from './atencion/atencion.component';
import { RouterTestingModule } from '@angular/router/testing';


@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    CabeceraComponent,
    PieComponent,
    ContactoComponent,
    InicioComponent,
    LoginComponent,
    AltaJugadorComponent,
    ListarJugadoresComponent,
    BajaJugadorComponent,
    CambiarClubComponent,
    ListarFederacionesComponent,
    AltaClubFederacionComponent,
    ReservarEntrenamientoComponent,
    MultaJugadorComponent,
    LiberarMultaComponent,
    ApuntarseTorneoComponent,
    DetalleJugadorComponent,
    ModificarJugadorComponent,
    IntroducirResultadosComponent,
    AtencionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    NgxMaterialTimepickerModule,
    RouterTestingModule,
  ],
  providers: [ProcesaHTTPMsjService,
    AutenticarService,
    AltaService,
    BajaService,
    JugadoresService, 
    TorneosService, 
    ClubesService, 
    FederacionesService,
    ChatService,
    {provide: 'baseURL', useValue: baseURL}],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
