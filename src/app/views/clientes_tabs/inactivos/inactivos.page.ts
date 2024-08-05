import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inactivos',
  templateUrl: './inactivos.page.html',
  styleUrls: ['./inactivos.page.scss'],
})
export class InactivosPage implements OnInit {
  clientesInactivos: any[] = [];
  filterTerm: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadClientesInactivos();
  }

    loadClientesInactivos(): void {
      this.authService.getClientesInactivos().subscribe(response => {
        if (response && response.clientes_recientes && response.clientes_recientes.clientes) {
          this.clientesInactivos = response.clientes_recientes.clientes;
        } else {
          this.showError('No se pudieron cargar los clientes inactivos');
        }
      }, error => {
        console.error(error);
        this.showError('Error al cargar los clientes inactivos');
      });
    }
    

  private showError(message: string): void {
    alert(message);
  }
}
