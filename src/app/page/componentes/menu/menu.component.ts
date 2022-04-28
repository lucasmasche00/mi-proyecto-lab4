import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public isLogged() {
    return sessionStorage.getItem("usuario") != null && sessionStorage.getItem("claveHash") != null;
  }

  public logout() {
    if (this.isLogged()) {
      sessionStorage.removeItem("usuario");
      sessionStorage.removeItem("claveHash");
    }
  }

  ngOnInit(): void {
  }

}
