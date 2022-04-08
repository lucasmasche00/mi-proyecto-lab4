import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Clase1Component } from './componentes/clase1/clase1.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './page/componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { NotFoundComponent } from './page/componentes/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PreguntadosComponent } from './page/componentes/preguntados/preguntados.component';
import { TatetiComponent } from './page/componentes/tateti/tateti.component';
import { JuegosComponent } from './page/componentes/juegos/juegos.component';
import { QuienSoyComponent } from './page/componentes/quien-soy/quien-soy.component';
import { HomeComponent } from './page/componentes/home/home.component';
import { MenuComponent } from './page/componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Clase1Component,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    NotFoundComponent,
    PreguntadosComponent,
    TatetiComponent,
    JuegosComponent,
    QuienSoyComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
