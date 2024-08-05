import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralesPageRoutingModule } from './generales-routing.module';

import { GeneralesPage } from './generales.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralesPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [GeneralesPage]
})
export class GeneralesPageModule {}
