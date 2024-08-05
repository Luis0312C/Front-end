import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage,
    children:[
      {
        path: 'activos',
        loadChildren: () => import('../clientes_tabs/activos/activos.module').then(m => m.ActivosPageModule)
      },
      {
        path: 'inactivos',
        loadChildren: () => import('../clientes_tabs/inactivos/inactivos.module').then(m => m.InactivosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
