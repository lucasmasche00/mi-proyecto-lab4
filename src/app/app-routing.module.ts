import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clase1Component } from './componentes/clase1/clase1.component';
import { NotFoundComponent } from './page/componentes/not-found/not-found.component';
import { JuegosComponent } from './page/componentes/juegos/juegos.component';
import { TatetiComponent } from './page/componentes/tateti/tateti.component';
import { HomeComponent } from './page/componentes/home/home.component';
import { LoginComponent } from './page/componentes/login/login.component';
import { QuienSoyComponent } from './page/componentes/quien-soy/quien-soy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: 'about', component: QuienSoyComponent },
  {
    path: 'juegos', component: JuegosComponent, children: [
      { path: 'tateti', component: TatetiComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'clase1', component: Clase1Component },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
