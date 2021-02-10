import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoesiasPrivadaPage } from './poesias-privada.page';

const routes: Routes = [
  {
    path: '',
    component: PoesiasPrivadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoesiasPrivadaPageRoutingModule {}
