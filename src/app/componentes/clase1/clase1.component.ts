import { Component, OnInit } from '@angular/core';
import { Suma } from 'src/app/entidades/suma';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.scss']
})
export class Clase1Component implements OnInit {

  suma: Suma;

  constructor() {
    this.suma = new Suma();
  }

  ngOnInit(): void {
  }

}
