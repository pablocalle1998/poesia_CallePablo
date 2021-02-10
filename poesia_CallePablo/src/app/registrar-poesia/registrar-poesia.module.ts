import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPoesiaPageRoutingModule } from './registrar-poesia-routing.module';

import { RegistrarPoesiaPage } from './registrar-poesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPoesiaPageRoutingModule
  ],
  declarations: [RegistrarPoesiaPage]
})
export class RegistrarPoesiaPageModule {}
