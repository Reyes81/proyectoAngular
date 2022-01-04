import{ Routes } from'@angular/router';
import{ InicioComponent} from '../inicio/inicio.component';
import{ NosotrosComponent} from '../nosotros/nosotros.component';
import{ ContactoComponent} from '../contacto/contacto.component';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';
import { ListarFederacionesComponent } from '../listar-federaciones/listar-federaciones.component';
import { DetalleJugadorComponent } from '../detalle-jugador/detalle-jugador.component';

export const rutas: Routes= [
{ path: 'inicio', component: InicioComponent},
{ path: 'nosotros', component: NosotrosComponent},
{ path: 'contacto', component: ContactoComponent},
{path:'listajugadores', component: ListarJugadoresComponent},
{path:'listafederaciones', component: ListarFederacionesComponent},
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
{path: 'jugador/:id',component:DetalleJugadorComponent}
];