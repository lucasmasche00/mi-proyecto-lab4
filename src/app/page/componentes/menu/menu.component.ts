import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  public isLogged() {
    return this.usuariosService.isLogged();
  }
  
  public logout() {
    if (this.isLogged()) {
      sessionStorage.removeItem("usuario")
      this.usuariosService.usuarioLogueado = new Usuario('','');
    }
  }
}
