import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspeccionPageRoutingModule } from './prospeccion-routing.module';

import { ProspeccionPage } from './prospeccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspeccionPageRoutingModule
  ],
  declarations: [ProspeccionPage]
})
export class ProspeccionPageModule {}
