import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactivosPageRoutingModule } from './inactivos-routing.module';

import { InactivosPage } from './inactivos.page';
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactivosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InactivosPage]
})
export class InactivosPageModule {}
