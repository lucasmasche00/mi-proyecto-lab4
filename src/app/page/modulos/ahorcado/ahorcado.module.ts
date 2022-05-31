import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from '../../componentes/ahorcado/ahorcado.component';


@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule
  ]
})
export class AhorcadoModule { }
