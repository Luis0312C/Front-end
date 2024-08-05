import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-misprospectos',
  templateUrl: './misprospectos.page.html',
  styleUrls: ['./misprospectos.page.scss'],
})
export class MisprospectosPage implements OnInit {
  p: number = 1;
  prospectos: any[] = [];
  filterTerm: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadProspectosData();
  }

  loadProspectosData(): void {
    this.authService.getMisProspectos().subscribe(response => {
      if (response && response.prospectos) {
        this.prospectos = response.prospectos;
      } else {
        alert('Failed to load profile');
      }   
    }, error => {
      console.error(error);
      alert('Failed to load profile');
    });
  }
}
