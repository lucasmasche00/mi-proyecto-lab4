import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayorMenorComponent } from '../../componentes/mayor-menor/mayor-menor.component';

const routes: Routes = [
  { path: '', component: MayorMenorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayorMenorRoutingModule { }
