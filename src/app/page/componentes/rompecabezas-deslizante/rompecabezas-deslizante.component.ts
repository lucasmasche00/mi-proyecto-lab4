import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rompecabezas-deslizante',
  templateUrl: './rompecabezas-deslizante.component.html',
  styleUrls: ['./rompecabezas-deslizante.component.scss']
})
export class RompecabezasDeslizanteComponent implements OnInit {

  public puntaje: number = 10000;
  public piezas: any[] = [];
  public gameOver: boolean = false;
  public estiloNormal: string = 'pieza-normal';
  public estiloVacia: string = 'pieza-vacia';
  public estiloSelec: string = 'pieza-seleccionable';
  public arrayGanador: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
  public indicePiezaVacia: number = 15;

  constructor() { }

  ngOnInit(): void {
    do {
      this.piezas = this.getRandomRompecabezas();
    } while (RompecabezasDeslizanteComponent.equalPiezasArray(this.piezas, this.arrayGanador));
  }

  public moverPieza(indicePieza: number) {
    if (!this.gameOver) {
      let indicesSelecViejo = this.getIndiciePiezasSeleccionables(this.indicePiezaVacia);
      if (this.existeNumeroEnArray(indicesSelecViejo, indicePieza)) {
        let indicesSelecNuevo = this.getIndiciePiezasSeleccionables(indicePieza);
        //Aca intercambio la pieza vacía por la elegida
        let indiceAux = indicePieza;
        indicePieza = this.indicePiezaVacia;
        this.indicePiezaVacia = indiceAux;
        //---------------------------------------------
        let ordenAux = this.piezas[indicePieza].orden;
        this.piezas[indicePieza].orden = this.piezas[this.indicePiezaVacia].orden;
        this.piezas[this.indicePiezaVacia].orden = ordenAux;

        switch (indicesSelecNuevo.length) {
          case 2:
            this.piezas = this.getEstiloPiezas(this.indicePiezaVacia, indicesSelecNuevo[0], indicesSelecNuevo[1]);
            break;
          case 3:
            this.piezas = this.getEstiloPiezas(this.indicePiezaVacia, indicesSelecNuevo[0], indicesSelecNuevo[1], indicesSelecNuevo[2]);
            break;
          case 4:
            this.piezas = this.getEstiloPiezas(this.indicePiezaVacia, indicesSelecNuevo[0], indicesSelecNuevo[1], indicesSelecNuevo[2], indicesSelecNuevo[3]);
            break;
          default:
            break;
        }
        if(this.puntaje > 0)
          this.puntaje--;
        if (RompecabezasDeslizanteComponent.equalPiezasArray(this.piezas, this.arrayGanador))
          this.gameOver = true;
      }
    }
  }

  private getEstiloPiezas(indiceVacia: number, indiceSelec1: number, indiceSelec2: number = -1, indiceSelec3: number = -1, indiceSelec4: number = -1) {
    let piezasSalida: any[] = [];
    for (let i = 0; i < this.piezas.length; i++) {
      switch (i) {
        case indiceVacia:
          piezasSalida.push({ orden: '', estilo: this.estiloVacia });
          break;
        case indiceSelec1: case indiceSelec2: case indiceSelec3: case indiceSelec4:
          piezasSalida.push({ orden: this.piezas[i].orden, estilo: this.estiloSelec });
          break;
        default:
          piezasSalida.push({ orden: this.piezas[i].orden, estilo: this.estiloNormal });
          break;
      }
    }
    console.log(piezasSalida);
    return piezasSalida;
  }

  private getIndicePiezaVacia() {
    let indice = 0;
    for (let i = 0; i < this.piezas.length; i++) {
      if (this.piezas[i].orden == '') {
        indice = i;
        break;
      }
    }
    return indice;
  }

  private getIndiciePiezasSeleccionables(indicePiezaVacia: number) {
    switch (indicePiezaVacia) {
      case 0: return [1, 4];
      case 1: return [0, 2, 5];
      case 2: return [1, 3, 6];
      case 3: return [2, 7];
      case 4: return [0, 5, 8];
      case 5: return [1, 4, 6, 9];
      case 6: return [2, 5, 7, 10];
      case 7: return [3, 6, 11];
      case 8: return [4, 9, 12];
      case 9: return [5, 8, 10, 13];
      case 10: return [6, 9, 11, 14];
      case 11: return [7, 10, 15];
      case 12: return [8, 13];
      case 13: return [9, 12, 14];
      case 14: return [10, 13, 15];
      case 15: return [11, 14];
      default: return [0];
    }
  }

  private getRandomRompecabezas() {
    let arrayRandom = this.getRandomArrayOfNumbers();
    let piezasSalida: any[] = [];
    for (let i = 0; i < arrayRandom.length; i++) {
      switch (i) {
        case 11: case 14:
          piezasSalida.push({ orden: arrayRandom[i], estilo: this.estiloSelec });
          break;
        case 15:
          piezasSalida.push({ orden: '', estilo: this.estiloVacia });
          break;
        default:
          piezasSalida.push({ orden: arrayRandom[i], estilo: this.estiloNormal });
          break;
      }
    }
    return piezasSalida;
  }

  private static equalPiezasArray(piezas: any[], array: any[]) {
    let sonIguales = true;
    for (let i = 0; i < array.length; i++) {
      if (piezas[i].orden != array[i]) {
        sonIguales = false;
        break;
      }
    }
    return sonIguales;
  }

  private getRandomArrayOfNumbers() {
    let arrayOrdenado: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
    let arraySalida: any[] = [];
    while (arraySalida.length < 16) {
      let randomIndex = this.getRandomInt(0, 15);
      if (!this.existeNumeroEnArray(arraySalida, arrayOrdenado[randomIndex]) && arrayOrdenado[randomIndex] != undefined) {
        arraySalida.push(arrayOrdenado[randomIndex]);
        arrayOrdenado.splice(randomIndex, 1);
      }
    }
    for (let i = 0; i < arraySalida.length; i++) {
      if(arraySalida[i] == '') {
        let aux = arraySalida[i];
        arraySalida[i] = arraySalida[15];
        arraySalida[15] = aux;
        break;
      }
    }
    return arraySalida;
  }

  private existeNumeroEnArray(array: number[], numero: number) {
    let estaEnArray = false;
    for (let i = 0; i < array.length; i++) {
      if (numero == array[i]) {
        estaEnArray = true;
        break;
      }
    }
    return estaEnArray;
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
