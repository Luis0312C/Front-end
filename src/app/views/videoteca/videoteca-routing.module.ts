import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideotecaPage } from './videoteca.page';

const routes: Routes = [
  {
    path: '',
    component: VideotecaPage,

    children :[
      {
        path: 'generales',
        loadChildren: () => import('../videoteca_tabs/generales/generales.module').then(m => m.GeneralesPageModule)
      },
      {
        path: 'manuales',
        loadChildren: () => import('../videoteca_tabs/manuales/manuales.module').then(m => m.ManualesPageModule)
      },
      {
        path: 'operativa',
        loadChildren: () => import('../videoteca_tabs/operativa/operativa.module').then(m => m.OperativaPageModule)
      },
      {
        path: 'training',
        loadChildren: () => import('../videoteca_tabs/training/training.module').then(m => m.TrainingPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideotecaPageRoutingModule {}
