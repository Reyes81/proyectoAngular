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


import { AutenticarService } from './services/autenticar.service';
import { AltaService } from './services/alta.service';
import { BajaService } from './services/baja.service';
import { ListarJugadoresService } from './services/listar-jugadores.service';
import { ListarClubesService } from './services/listar-clubes.service';
import { ListarFederacionesService } from './services/listar-federaciones.service';

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
import { BajaJugadorComponent } from './baja-jugador/baja-jugador.component';
import { CambiarClubComponent } from './cambiar-club/cambiar-club.component';
import { ListarFederacionesComponent } from './listar-federaciones/listar-federaciones.component';
import { AltaClubFederacionComponent } from './alta-club-federacion/alta-club-federacion.component';
import { ReservarEntrenamientoComponent } from './reservar-entrenamiento/reservar-entrenamiento.component';

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
  

  ],
  providers: [AutenticarService,AltaService,BajaService,ListarJugadoresService, ListarClubesService, ListarFederacionesService],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
