import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPoesiasPage } from './inicio-poesias.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPoesiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPoesiasPageRoutingModule {}
