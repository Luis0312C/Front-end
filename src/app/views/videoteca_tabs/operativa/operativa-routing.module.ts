import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperativaPage } from './operativa.page';

const routes: Routes = [
  {
    path: '',
    component: OperativaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperativaPageRoutingModule {}
