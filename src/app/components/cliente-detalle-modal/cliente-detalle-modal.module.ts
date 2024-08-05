import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClienteDetalleModalComponent } from './cliente-detalle-modal.component';

@NgModule({
  declarations: [ClienteDetalleModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ClienteDetalleModalComponent]
})
export class ClienteDetalleModalModule {}
