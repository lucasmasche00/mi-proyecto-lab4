import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {

  public numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public palos: any[] = [{ forma: 'hearts', color: 'rojo' }, { forma: 'diamonds', color: 'rojo' }, { forma: 'clubs', color: 'negro' }, { forma: 'spades', color: 'negro' }];
  public cartaAnterior: any;
  public cartaActual: any;
  public cartaSiguiente: any;
  public gameOver: boolean = false;
  public juegoGanado: boolean = false;
  public puntaje: number = 0;
  public vidas: any[] = [1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
    this.cartaActual = this.getCartaRandom();
  }

  public adivinar(mayorMenorJugador: string) {
    if (!this.gameOver) {
      let esMayorOMenor = '';
      this.cartaSiguiente = this.getCartaRandom();
      if (this.cartaActual.numero > this.cartaSiguiente.numero)
        esMayorOMenor = 'menor';
      else if (this.cartaActual.numero < this.cartaSiguiente.numero)
        esMayorOMenor = 'mayor';
      else
        esMayorOMenor = 'igual';
      if (mayorMenorJugador == esMayorOMenor || esMayorOMenor == 'igual')
        this.puntaje++;
      else
        this.vidas.splice(0, 1);
      this.cartaAnterior = this.cartaActual;
      this.cartaActual = this.cartaSiguiente;
      if (this.vidas == undefined || this.vidas.length <= 0)
        this.gameOver = true;
    }
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getCartaRandom() {
    return { numero: this.numeros[this.getRandomInt(0, 11)], palo: this.palos[this.getRandomInt(0, 3)] };
  }
}
