import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPoesiasPageRoutingModule } from './inicio-poesias-routing.module';

import { InicioPoesiasPage } from './inicio-poesias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPoesiasPageRoutingModule
  ],
  declarations: [InicioPoesiasPage]
})
export class InicioPoesiasPageModule {}
