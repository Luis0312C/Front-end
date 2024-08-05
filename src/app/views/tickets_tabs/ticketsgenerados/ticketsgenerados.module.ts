import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketsgeneradosPageRoutingModule } from './ticketsgenerados-routing.module';

import { TicketsgeneradosPage } from './ticketsgenerados.page';
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketsgeneradosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TicketsgeneradosPage]
})
export class TicketsgeneradosPageModule {}
