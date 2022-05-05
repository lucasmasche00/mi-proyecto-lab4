import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  isAhorcadoLike: boolean = false;
  isMayorOMenorLike: boolean = false;
  isRompecabezasDeslizanteLike: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  clickLikeButtonAhorcado() {
    this.isAhorcadoLike = !this.isAhorcadoLike;
  }

  clickLikeButtonMayorOMenor() {
    this.isMayorOMenorLike = !this.isMayorOMenorLike;
  }

  clickLikeButtonRompecabezasDeslizante() {
    this.isRompecabezasDeslizanteLike = !this.isRompecabezasDeslizanteLike;
  }
}
