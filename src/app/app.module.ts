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
import { JuegosComponent } from './page/componentes/juegos/juegos.component';
import { QuienSoyComponent } from './page/componentes/quien-soy/quien-soy.component';
import { HomeComponent } from './page/componentes/home/home.component';
import { MenuComponent } from './page/componentes/menu/menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { MainComponent } from './page/componentes/main/main.component';
import { AhorcadoComponent } from './page/componentes/ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    Clase1Component,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    NotFoundComponent,
    PreguntadosComponent,
    JuegosComponent,
    QuienSoyComponent,
    HomeComponent,
    MenuComponent,
    MainComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
