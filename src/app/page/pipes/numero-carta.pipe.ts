import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroCarta'
})
export class NumeroCartaPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    let valueString = value.toString();
    switch (valueString) {
      case '1':
        valueString = 'A';
        break;
      case '10':
        valueString = 'J';
        break;
      case '11':
        valueString = 'Q';
        break;
      case '12':
        valueString = 'K';
        break;
      default:
        break;
    }
    return valueString;
  }

}
