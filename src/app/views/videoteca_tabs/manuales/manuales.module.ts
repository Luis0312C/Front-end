import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualesPageRoutingModule } from './manuales-routing.module';

import { ManualesPage } from './manuales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualesPageRoutingModule
  ],
  declarations: [ManualesPage]
})
export class ManualesPageModule {}
