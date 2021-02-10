import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearpoesiaPage } from './crear-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: CrearpoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearpoesiaPageRoutingModule {}
