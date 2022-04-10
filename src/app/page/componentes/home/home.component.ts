import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombreUsuario: string;

  constructor() {
    this.nombreUsuario = sessionStorage.getItem('usuario') ?? 'unknown';
  }

  ngOnInit(): void {
  }

}
