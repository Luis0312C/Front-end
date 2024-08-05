import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsPage } from './tickets.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsPage,
    children :[
      {
        path: 'tickets-generados',
        loadChildren: () => import('../tickets_tabs/ticketsgenerados/ticketsgenerados.module').then(m => m.TicketsgeneradosPageModule)
      },
      {
        path: 'tickets-asociados',
        loadChildren: () => import('../tickets_tabs/ticketsasociados/ticketsasociados.module').then(m => m.TicketsasociadosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsPageRoutingModule {}
