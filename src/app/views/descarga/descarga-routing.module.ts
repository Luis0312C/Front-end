import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargaPage } from './descarga.page';

const routes: Routes = [
  {
    path: '',
    component: DescargaPage,
    children:[
      {
        path: 'documentos',
        loadChildren: () => import('../descargas_tabs/documentos/documentos.module').then(m => m.DocumentosPageModule)
      },
      {
        path: 'formularios',
        loadChildren: () => import('../descargas_tabs/formularios/formularios.module').then(m => m.FormulariosPageModule)
      },
      {
        path: 'procesos',
        loadChildren: () => import('../descargas_tabs/procesos/procesos.module').then(m => m.ProcesosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargaPageRoutingModule {}
