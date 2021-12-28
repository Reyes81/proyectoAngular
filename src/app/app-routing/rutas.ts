import{ Routes } from'@angular/router';
import{ InicioComponent} from '../inicio/inicio.component';
import{ NosotrosComponent} from '../nosotros/nosotros.component';
import{ ContactoComponent} from '../contacto/contacto.component';
import { ListarJugadoresComponent } from '../listar-jugadores/listar-jugadores.component';

export const rutas: Routes= [
{ path: 'inicio', component: InicioComponent},
{ path: 'nosotros', component: NosotrosComponent},
{ path: 'contacto', component: ContactoComponent},
{path:'listajugadores', component: ListarJugadoresComponent},
{ path: '', redirectTo: '/inicio', pathMatch: 'full' }
];