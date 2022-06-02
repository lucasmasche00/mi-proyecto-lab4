import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RompecabezasDeslizanteComponent } from '../../componentes/rompecabezas-deslizante/rompecabezas-deslizante.component';

const routes: Routes = [
  { path: '', component: RompecabezasDeslizanteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RompecabezasDeslizanteRoutingModule { }
