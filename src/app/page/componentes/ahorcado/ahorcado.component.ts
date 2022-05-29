import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  public gameOver: boolean = false;
  public juegoGanado: boolean = false;
  public arrayLetras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public arrayPalabras: string[] = ['VEHICULO', 'MATE', 'CANASTA', 'CARRETERA', 'ZANAHORIA', 'PUEBLO', 'COMPUTADORA', 'NAVAJA', 'DEPARTAMENTO', 'CIENTIFICO', 'LANCHA', 'BALON', 'RAQUETA'];
  public palabraAdivinar: string = '';
  public arrayLetrasDePalabraAdivinar: string[] = [];
  public arrayLetrasAdivinadas: string[] = [];
  public errores: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.palabraAdivinar = this.arrayPalabras[this.getRandomInt(0, this.arrayPalabras.length - 1)];
    for (let i = 0; i < this.palabraAdivinar.length; i++) {
      this.arrayLetrasDePalabraAdivinar.push(this.palabraAdivinar[i]);
      this.arrayLetrasAdivinadas.push('_');
    }
    //console.log(this.arrayLetrasDePalabraAdivinar);
  }

  public adivinar(letra: string) {
    if (!this.gameOver && !this.juegoGanado) {
      let letraEncontrada = false;
      for (let i = 0; i < this.arrayLetrasDePalabraAdivinar.length; i++) {
        const element = this.arrayLetrasDePalabraAdivinar[i];
        if (letra == element) {
          this.arrayLetrasAdivinadas[i] = letra;
          letraEncontrada = true;
        }
      }
      if (!letraEncontrada)
        this.errores++;
      if(this.errores >= 6)
        this.gameOver = true;
      else if(!this.traerSiQuedanLetrasSinAdivinar())
        this.juegoGanado = true;
    }
  }

  private traerSiQuedanLetrasSinAdivinar() {
    let quedanLetrasSinAdivinar = false;
    for (let i = 0; i < this.arrayLetrasAdivinadas.length; i++) {
      const element = this.arrayLetrasAdivinadas[i];
      if(element == '_')
        quedanLetrasSinAdivinar = true;
    }
    return quedanLetrasSinAdivinar;
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
