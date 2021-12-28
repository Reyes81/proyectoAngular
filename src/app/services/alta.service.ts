import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  jugador = {nombre: '',password: '',nocerrar:false};
  jugadores:any[] =[];

  constructor() { }

  obtenerJugadores(): Observable<any[]> {
    let jugadores:any = [];
    let self = this;
    /*
    //Obtenemos una referencia del Almacén usuarios
    //Se usa “readonly” dado que lo que buscamos es solo leer el contenido del mismo
    let itemObjectStore = self.db.transaction("usuarios", "readonly").objectStore("usuarios");
    //Con la referencia del almacén se abre un cursor para iterar sobre cada uno de los objetos usuario
    //que contiene el almacén y se agrega al array de elementos
    let request = itemObjectStore.openCursor();
    request.onsuccess = function() {
    let cursor = request.result;
    if (cursor) {
    jugadores.push(cursor.value);
    cursor.continue();
    } else {
    //Aquí ya se ha acabado la iteración
    ;
    }
    };
    */
    return of(jugadores);
    }    
    altaJugador() {
      let self = this;
    }
    
}
