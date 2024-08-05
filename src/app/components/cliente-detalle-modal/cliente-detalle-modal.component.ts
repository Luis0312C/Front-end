import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-detalle-modal',
  templateUrl: './cliente-detalle-modal.component.html',
  styleUrls: ['./cliente-detalle-modal.component.scss'],
})
export class ClienteDetalleModalComponent{
  @Input() clientesData:any;

  constructor(private modalController: ModalController) { }


  cerrarModal(){
    this.modalController.dismiss();
  }
}

