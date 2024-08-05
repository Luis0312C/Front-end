import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperativaPageRoutingModule } from './operativa-routing.module';

import { OperativaPage } from './operativa.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperativaPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [OperativaPage]
})
export class OperativaPageModule {}
