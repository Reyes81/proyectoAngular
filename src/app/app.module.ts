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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { AutenticarService } from './services/autenticar.service';
import { AltaService } from './services/alta.service';
import { ListarJugadoresService } from './services/listar-jugadores.service';

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
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,

  ],
  providers: [AutenticarService,AltaService,ListarJugadoresService],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
