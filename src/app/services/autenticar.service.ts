import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  usuario = {nombre: '',password: '',nocerrar:false};

  constructor() { }

  autenticar(usuario:any):boolean {

    if(usuario.nocerrar)
    {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
    else{
      sessionStorage.setItem("usuario", JSON.stringify(usuario))
    }
    return true;
  }
cerrarSesion(): Observable<any>{
  localStorage.removeItem("usuario");
  sessionStorage.removeItem("password");
  this.usuario={nombre: '',password: '', nocerrar:false};
  return of(this.usuario);
}

getLogin(): Observable<any> {
  let usuario = localStorage.getItem("usuario");
  if (usuario!=null) {
  this.usuario = JSON.parse(usuario);
  }
  else{
  this.usuario = {nombre: '', password: '', nocerrar: false};
  }
  return of(this.usuario);
  }
}
