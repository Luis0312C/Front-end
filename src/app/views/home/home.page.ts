import { Component, OnInit} from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { response, Router } from 'express';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  darkMode = false;
  trayectoria: any = {};
  ticketsPendientes: any [] = [];
  topTenTickets: any [] = [];
  Prospectos : any [] = [];
  clientesRecientes : any [] = [];
  ticketsAsociados : any [] = [];
  ticketsGenerados: any [] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData() {
    this.authService.getHome().subscribe(response => {
      if (response.estadisticas) {
        this.trayectoria = response.estadisticas.estadisticas;
        this.ticketsPendientes = response.tickets_pendientes.pendientes;
        this.topTenTickets = response.top_ten_tickets.top;
        this.Prospectos = response.prospectos.prospectos;
        this.clientesRecientes = response.clientes_recientes.proyectos;
        this.ticketsAsociados = response.tickets_asociados.tickets_asociados;
        this.ticketsGenerados = response.tickets_generados.tickets_generados;
      } 
    }, error => {
      console.error(error);
    });
  }
}