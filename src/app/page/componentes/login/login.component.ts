import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }
  
}
