import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisprospectosPage } from './misprospectos.page';

const routes: Routes = [
  {
    path: '',
    component: MisprospectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisprospectosPageRoutingModule {}
