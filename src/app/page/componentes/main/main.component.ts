import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}