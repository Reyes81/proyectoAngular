import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JugadoresService } from './jugadores.service';
import { Jugador } from '../compartido/Jugador';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  vJugadores:Jugador[] = [];
  usuario = {nombre: '',password: '',nocerrar:false, type: ''};
  usuarios:any[] =[];
  db:any;

  constructor(private listarJugadores:JugadoresService) {
  
    this.abrirBD();
    this.listarJugadores.getJugadores().subscribe(jugadores=>this.vJugadores=jugadores);
   }

   
   
   setJugadores(jugs:Jugador[]){
     this.vJugadores = jugs; 
     console.log(this.vJugadores);
   }
   autenticar(usuario:any): boolean {
    //Comprobar si es correcto
    if (this.comprobarUsuario(usuario)){
    if (usuario.nocerrar) {
      localStorage.setItem("usuario", JSON.stringify(this.usuario)); 
  }
    else {
      sessionStorage.setItem("usuario", JSON.stringify(this.usuario)); 
    }
    
    return true; 
    }
    else {
      alert("El usuario no existe");
    return false;
    }
    }
    
cerrarSesion(): Observable<any>{
  localStorage.removeItem("usuario");
  sessionStorage.removeItem("password");
  this.usuario={nombre: '',password: '', nocerrar:false, type:''};
  return of(this.usuario);
}

getLogin(): Observable<any> {
  let usuario = localStorage.getItem("usuario");
  if (usuario!=null) {
  this.usuario = JSON.parse(usuario);
  }
  else{
  this.usuario = {nombre: '', password: '', nocerrar: false, type:''};
  }
  return of(this.usuario);
  }

  abrirBD() {
    //Se abre la BD
    let request = window.indexedDB.open("miBD", 1);
    let db = this;
    //En caso de error
    request.onerror = function(event){
    console.log("Error al abrir la base de datos", event);
    }
    //En caso de éxito
    request.onsuccess = function(event){
    console.log("Base de datos abierta correctamente");
    db.db = request.result;
    console.log(db.db);
    db.obtenerUsuarios().subscribe(usuarios => db.usuarios = usuarios);
    
    
    }
    request.onupgradeneeded = function(event){
      
      console.log("Creando base de datos");
      //Crear almacén usuarios
      let db = request.result;
      if (request != null) {
      if (!db.objectStoreNames.contains('usuarios')){
      let objectStore = db.createObjectStore("usuarios",{ keyPath : "nombre" });
      //Definimos un campo o índice para guardar el login y el password
      objectStore.transaction.oncomplete = function(event) {
      console.log("almacén creado correctamente");
      //Aquí el almacén "usuarios" ya ha esta creado y listo para ser usado
      //Introducimos usuario predefinidos
      let transaccion = db.transaction("usuarios","readwrite").objectStore("usuarios");
      
      let req = transaccion.add({nombre: "admin", password: "12345", type:"administrador"});
      let req2 = transaccion.add({nombre: "gerente", password: "12345", type:"gerente"});
      let req3 = transaccion.add({nombre: "jugador1", password: "12345", type:"jugador"});
      let req4 = transaccion.add({nombre: "entrenador", password: "12345",type:"entrenador"});
      
      
      
      req.onsuccess = function(event) {
        console.log("Exito");
        };

      req2.onsuccess = function(event) {
        console.log("Exito");
        };
      req3.onsuccess = function(event) {
          console.log("Exito");
        };

      req4.onsuccess = function(event) {
         console.log("Exito");
        };

        }
        }
        } } }

        obtenerUsuarios(): Observable<any[]> {
          let usuarios:any = [];
          let self = this;
          //Obtenemos una referencia del Almacén usuarios
          //Se usa “readonly” dado que lo que buscamos es solo leer el contenido del mismo
          let itemObjectStore = self.db.transaction("usuarios", "readonly").objectStore("usuarios");
          //Con la referencia del almacén se abre un cursor para iterar sobre cada uno de los objetos usuario
          //que contiene el almacén y se agrega al array de elementos
          let request = itemObjectStore.openCursor();
          request.onsuccess = function() {
          let cursor = request.result;
          if (cursor) {
          usuarios.push(cursor.value);
          cursor.continue();
          } else {
          //Aquí ya se ha acabado la iteración
          ;
          }
          };
          this.listarJugadores.getJugadores().subscribe(element=> this.vJugadores =element);
          return of(usuarios);
          }        

      comprobarUsuario(login:any):boolean {
          let encontrado = this.usuarios.find(usuario => ((usuario.nombre == login.nombre) && (usuario.password == login.password)) );
          
          if (encontrado){
           this.usuario = encontrado;
          return true;
          }
          else{
            return false;
          }
      }
}
