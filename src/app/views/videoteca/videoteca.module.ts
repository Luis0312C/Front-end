import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideotecaPageRoutingModule } from './videoteca-routing.module';

import { VideotecaPage } from './videoteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideotecaPageRoutingModule
  ],
  declarations: [VideotecaPage]
})
export class VideotecaPageModule {}
