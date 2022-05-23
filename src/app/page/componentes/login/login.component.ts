import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioAuxLogin: Usuario = new Usuario('', '', '');;
  signUpNombre: string = '';
  signUpPassword1: string = '';
  signUpPassword2: string = '';
  signUpEmail: string = '';
  clavePura: string = '';

  constructor(public usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
  }

  public login() {
    let fechaLogin = new Date(Date.now()).toLocaleString();
    let mensaje = 'El usuario/clave no coincide';
    this.usuariosService.usuariosDB.forEach(u => {
      if (u.nombre === this.usuarioAuxLogin.nombre && u.clave === this.usuarioAuxLogin.clave) {
        sessionStorage.setItem("usuario", JSON.stringify({ 'nombre': u.nombre, 'clave': u.clave, 'fechaLogin': fechaLogin }));
        this.usuariosService.usuarioLogueado = { ...u };
        this.usuariosService.updateUsuarioFechaLogin(this.usuariosService.usuarioLogueado.nombre, fechaLogin);
        this.usuariosService.agregarLogIngresoUsuario(this.usuariosService.usuarioLogueado.nombre, fechaLogin);
        mensaje = 'Éxito';
        return;
      }
    });
    return console.log(mensaje);
  }

  public codificar() {
    this.usuarioAuxLogin.clave = Usuario.codificar(this.clavePura);
    //console.log(this.usuarioAuxLogin.clave); //VER CLAVE HASHEADA
  }

  //OPCION 1
  /* public loginAsGuest() {
    let nombre = 'invitado';
    let clave = '`ifqlubZ';
    let fechaLogin = new Date(Date.now()).toLocaleString();
    sessionStorage.setItem("usuario", JSON.stringify({ 'nombre': nombre, 'clave': clave }));
    this.usuariosService.usuarioLogueado = new Usuario(nombre, clave, fechaLogin);
    this.usuariosService.updateUsuarioFechaLogin(this.usuariosService.usuarioLogueado.nombre, fechaLogin);
    this.usuariosService.agregarLogIngresoUsuario(nombre, fechaLogin);
  } */

  //OPCION 2
  public loginAsGuest() {
    this.usuarioAuxLogin.nombre = 'invitado';
    this.usuarioAuxLogin.clave = '`ifqlubZ';
    this.clavePura = 'chipote';
  }

  public signUp() {
    let fechaLogin = new Date(Date.now()).toLocaleString();
    let mensaje = '';
    let isRegistered = false;
    if (this.signUpPassword1 != this.signUpPassword2) {
      mensaje = 'Claves no coinciden';
    }
    else {
      this.usuariosService.usuariosDB.forEach(u => {
        if (u.nombre === this.signUpNombre) {
          isRegistered = true;
          mensaje = 'Usuario ya existe';
          return;
        }
      });
      if (!isRegistered) {
        sessionStorage.setItem("usuario", JSON.stringify({ 'nombre': this.signUpNombre, 'clave': Usuario.codificar(this.usuarioAuxLogin.clave), 'fechaLogin': fechaLogin }));
        let usuarioAux = new Usuario(this.signUpNombre, this.signUpPassword1, fechaLogin)
        this.usuariosService.usuarioLogueado = usuarioAux;
        this.usuariosService.usuariosDB.push(usuarioAux);
        this.usuariosService.agregarUsuario(usuarioAux.nombre, usuarioAux.nombre, usuarioAux.clave, fechaLogin);
        this.usuariosService.agregarLogIngresoUsuario(usuarioAux.nombre, fechaLogin);
        mensaje = 'Registro exitoso';
      }
    }
    return console.log(mensaje);
  }

}
