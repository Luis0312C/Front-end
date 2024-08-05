import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaprospectosPage } from './listaprospectos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaprospectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaprospectosPageRoutingModule {}
