import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.scss']
})
export class AtencionComponent implements OnInit {

  mensaje: string = '';
  mensajes: string[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMensajes().subscribe((mensaje: string) => {
      this.mensajes.push(mensaje);
    });
  }

  sendMensaje() {
    this.chatService.sendMensaje(this.mensaje);
    this.mensaje = '';
  }

}
