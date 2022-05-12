import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostrarBienvenida: boolean;

  constructor(public usuariosService: UsuariosService) {
    this.mostrarBienvenida = this.usuariosService.isLogged();
  }

  ngOnInit(): void {
  }

  public isLogged() {
    return this.usuariosService.isLogged();
  }
}
