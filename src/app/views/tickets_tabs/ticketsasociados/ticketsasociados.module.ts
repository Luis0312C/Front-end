import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketsasociadosPageRoutingModule } from './ticketsasociados-routing.module';

import { TicketsasociadosPage } from './ticketsasociados.page';
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketsasociadosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TicketsasociadosPage]
})
export class TicketsasociadosPageModule {}
