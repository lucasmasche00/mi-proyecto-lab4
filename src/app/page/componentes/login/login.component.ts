import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() enviarIsLogged = new EventEmitter();
  usuarioAux: Usuario;
  clavePura: string;
  mensajeError: string;
  hasError: boolean;

  constructor(public usuariosService: UsuariosService) {
    this.usuarioAux = new Usuario('', '');
    this.clavePura = '';
    this.mensajeError = 'Hola';
    this.hasError = false;
  }

  ngOnInit(): void {
  }

  public login() {
    let mensaje = 'El usuario/clave no coincide';
    let isLogged = 'n';
    this.usuariosService.listaUsuarios.forEach(u => {
      if (u.nombre === this.usuarioAux.nombre && u.clave === this.usuarioAux.clave) {
        sessionStorage.setItem("usuario", JSON.stringify({ 'nombre': this.usuarioAux.nombre, 'clave': this.usuarioAux.clave }));
        this.usuariosService.usuarioLogueado = { ...this.usuarioAux };
        isLogged = 'y';
        this.enviarIsLogged.emit(isLogged);
        mensaje = 'Éxito';
        return;
      }
    });
    return console.log(mensaje);
  }

  public codificar() {
    this.usuarioAux.clave = Usuario.codificar(this.clavePura);
  }

  public loginAsGuest() {
    let isLogged = 'y';
    sessionStorage.setItem("usuario", JSON.stringify({ 'nombre': 'invitado', 'clave': '`ifqlubZ' }));
    this.usuariosService.usuarioLogueado = new Usuario('invitado', '`ifqlubZ');
    this.enviarIsLogged.emit(isLogged);
  }

}
