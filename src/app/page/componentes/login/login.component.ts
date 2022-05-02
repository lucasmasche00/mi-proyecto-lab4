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

  constructor(public usuariosService: UsuariosService) {
    this.usuarioAux = new Usuario('','');
    this.clavePura = '';
  }

  ngOnInit(): void {
  }

  public login() {
    console.log(this.usuariosService.listaUsuarios);
    let mensaje = 'El usuario/clave no coincide';
    let isLogged = 'n';
    this.usuariosService.listaUsuarios.forEach(u => {
      if (u.nombre === this.usuarioAux.nombre && u.clave === this.usuarioAux.clave) {
        sessionStorage.setItem("usuario", JSON.stringify({ 'nombre': this.usuarioAux.nombre, 'clave': this.usuarioAux.clave }));
        this.usuariosService.usuarioLogueado = {...this.usuarioAux};
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
    console.log(this.usuarioAux, this.clavePura);
  }

}
