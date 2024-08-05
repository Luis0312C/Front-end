import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsasociadosPage } from './ticketsasociados.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsasociadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsasociadosPageRoutingModule {}
