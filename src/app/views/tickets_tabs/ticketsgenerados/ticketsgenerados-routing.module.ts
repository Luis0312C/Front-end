import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsgeneradosPage } from './ticketsgenerados.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsgeneradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsgeneradosPageRoutingModule {}
