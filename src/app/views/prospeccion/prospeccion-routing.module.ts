import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspeccionPage } from './prospeccion.page';

const routes: Routes = [
  {
    path: '',
    component: ProspeccionPage,
    children :[
      {
        path: 'lista-prospectos',
        loadChildren: () => import('../prospeccion_tabs/listaprospectos/listaprospectos.module').then(m => m.ListaprospectosPageModule)
      },
      {
        path: 'mis-prospectos',
        loadChildren: () => import('../prospeccion_tabs/misprospectos/misprospectos.module').then(m => m.MisprospectosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspeccionPageRoutingModule {}
