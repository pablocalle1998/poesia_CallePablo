import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPoesiaPage } from './registrar-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPoesiaPageRoutingModule {}
