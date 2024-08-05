import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisprospectosPageRoutingModule } from './misprospectos-routing.module';

import { MisprospectosPage } from './misprospectos.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisprospectosPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [MisprospectosPage]
})
export class MisprospectosPageModule {}
