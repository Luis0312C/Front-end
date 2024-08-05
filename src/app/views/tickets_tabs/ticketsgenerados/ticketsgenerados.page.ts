import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ticketsgenerados',
  templateUrl: './ticketsgenerados.page.html',
  styleUrls: ['./ticketsgenerados.page.scss'],
})
export class TicketsgeneradosPage implements OnInit {
  
  ticketsG: any[] = [];
  filterTerm: string = "";


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadTicketsGeneradosData();
  }

  loadTicketsGeneradosData(): void{
    this.authService.getTicketsGenerados().subscribe(response=>{
     if(response && response.tickets_generados && response.tickets_generados.tickets){
      this.ticketsG = response.tickets_generados.tickets;
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

