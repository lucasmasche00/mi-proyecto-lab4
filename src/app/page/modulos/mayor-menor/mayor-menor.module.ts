import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { MayorMenorComponent } from '../../componentes/mayor-menor/mayor-menor.component';
import { NumeroCartaPipe } from '../../pipes/numero-carta.pipe';


@NgModule({
  declarations: [
    MayorMenorComponent,
    NumeroCartaPipe
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule
  ]
})
export class MayorMenorModule { }
