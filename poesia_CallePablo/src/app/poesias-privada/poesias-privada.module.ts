import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoesiasPrivadaPageRoutingModule } from './poesias-privada-routing.module';

import { PoesiasPrivadaPage } from './poesias-privada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoesiasPrivadaPageRoutingModule
  ],
  declarations: [PoesiasPrivadaPage]
})
export class PoesiasPrivadaPageModule {}
