import { Component, OnInit } from '@angular/core';
import { Club } from '../compartido/Club';
import { Jugador } from '../compartido/Jugador';
import { Persona } from "../compartido/Persona";

@Component({
  selector: 'app-listar-jugadores',
  templateUrl: './listar-jugadores.component.html',
  styleUrls: ['./listar-jugadores.component.scss']
})
export class ListarJugadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 vProductos: Jugador[] = [
    {
      id: 1,
      
      
      
      categoria: 'Junior',
      moroso: false,
      
      // persona
      nombre: 'Alberto ',
      apellido: "Gaspar Villaba",
      edad: 18,
      user: "usuario",
      passwd: "password",

      // club
      club: {
        nombre : "club1",
        sede: "sede 1",
      }
      
     
      
    },
    {
      id: 2,
      
      
      
      categoria: 'Senior',
      moroso: true,
      
      // persona
      nombre: 'Alex ',
      apellido: "Reyes ",
      edad: 44,
      user: "usuario2",
      passwd: "password2",

      // club
      club: {
        nombre : "club2",
        sede: "sede 2",
      }
      
     
      
    }
    /*
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 400,
      imagen: '/assets/images/movil2.jpg',
     
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 500,
      imagen: '/assets/images/movil3.jpg',
      
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: 600,
      imagen: '/assets/images/movil4.jpg',
      
    }*/
    ];

}
