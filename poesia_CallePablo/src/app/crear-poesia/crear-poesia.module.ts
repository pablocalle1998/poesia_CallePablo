import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpoesiaPageRoutingModule } from './crear-poesia-routing.module';

import { CrearpoesiaPage } from './crear-poesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpoesiaPageRoutingModule
  ],
  declarations: [CrearpoesiaPage]
})
export class CrearpoesiaPageModule {}
