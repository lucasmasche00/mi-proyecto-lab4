import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public listaUsuarios: Usuario[];
  public usuarioLogueado: Usuario;

  constructor() {
    this.listaUsuarios = [
      new Usuario('testUser', 'palanca'),
      new Usuario('pepe', 'chipote')
    ]

    this.usuarioLogueado = this.getUsuarioLogueado();
  }
  
  private getUsuarioLogueado() {
    let usuario = sessionStorage.getItem('usuario');
    if(usuario != null)
      return JSON.parse(usuario);
    return new Usuario('', '');
  }

  public isLogged() {
    return this.usuarioLogueado.nombre != '' && this.usuarioLogueado.clave != '';
  }
}
