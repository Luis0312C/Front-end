import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listaprospectos',
  templateUrl: './listaprospectos.page.html',
  styleUrls: ['./listaprospectos.page.scss'],
})
export class ListaprospectosPage implements OnInit {
  p: number = 1;
  prospectosLista: any[] = [];
  filterTerm: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadProspectosListaData();
  }

  loadProspectosListaData(): void {
    this.authService.getProspectos().subscribe(response => {
      if (response && response.prospecto && response.prospecto.prospectos) {
        this.prospectosLista = response.prospecto.prospectos;
      } else {
        this.showError('No se pudieron cargar los prospectos');
      }
    }, error => {
      console.error(error);
      this.showError('Error al cargar los prospectos');
    });
  }

  private showError(message: string): void {
    alert(message);
  }
}
