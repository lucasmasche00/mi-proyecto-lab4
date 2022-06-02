import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RompecabezasDeslizanteRoutingModule } from './rompecabezas-deslizante-routing.module';
import { RompecabezasDeslizanteComponent } from '../../componentes/rompecabezas-deslizante/rompecabezas-deslizante.component';


@NgModule({
  declarations: [
    RompecabezasDeslizanteComponent
  ],
  imports: [
    CommonModule,
    RompecabezasDeslizanteRoutingModule
  ]
})
export class RompecabezasDeslizanteModule { }
