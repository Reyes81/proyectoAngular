import { Component, OnInit } from '@angular/core';
import { Club } from '../compartido/Club';
import { Jugador } from '../compartido/Jugador';
import { Persona } from "../compartido/Persona";
import { ListarJugadoresService } from '../services/listar-jugadores.service';

@Component({
  selector: 'app-listar-jugadores',
  templateUrl: './listar-jugadores.component.html',
  styleUrls: ['./listar-jugadores.component.scss']
})
export class ListarJugadoresComponent implements OnInit {

  vJugadores: Jugador[] = [
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
    ];

  constructor(private listarService: ListarJugadoresService) { }


  ngOnInit(): void {

  }
  }
 
    
       
