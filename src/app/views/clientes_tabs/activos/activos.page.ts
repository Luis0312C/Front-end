import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {
  clientesActivos: any[] = [];
  filterTerm: string = "";

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.loadClientesActivos();
  }

  loadClientesActivos() : void{
    this.authService.getClientesActivos().subscribe(response => {
      if (response && response.clientes_recientes && response.clientes_recientes.clientes) {
        this.clientesActivos = response.clientes_recientes.clientes;
      } else {
        this.showError('No se pudieron cargar los clientes recientes');
      }
    }, error => {
      console.error(error);
      this.showError('Error al cargar los clientes recientes');
    });
  }

  private showError(message: string): void {
    alert(message);
  }
}
