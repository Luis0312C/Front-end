import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ticketsasociados',
  templateUrl: './ticketsasociados.page.html',
  styleUrls: ['./ticketsasociados.page.scss'],
})
export class TicketsasociadosPage implements OnInit {

  ticketsA: any[] = [];
  filterTerm: string = "";


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadTicketsGeneradosData();
  }

  loadTicketsGeneradosData(): void{
    this.authService.getTicketsAsociados().subscribe(response=>{
     if(response && response.tickets_asociados && response.tickets_asociados.tickets){
      this.ticketsA = response.tickets_asociados.tickets;
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
