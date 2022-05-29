import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../entidades/mensaje';
import { ChatService } from '../../servicios/chat.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public listadoMensajes: any[] = [];
  public miMensaje: string = '';

  constructor(public chatService: ChatService, public usuariosService: UsuariosService) {
    this.listadoMensajes = this.chatService.mensajesDB;
  }

  ngOnInit(): void {
  }

  public enviarMensaje() {
    if(this.miMensaje != '') {
      this.chatService.agregarMensaje(this.usuariosService.usuarioLogueado.nombre, Date(), this.miMensaje);
      this.miMensaje = '';
    }
  }
}
