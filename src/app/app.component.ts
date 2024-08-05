import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DarkModeService } from './services/dark-mode.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  darkModeIcon: string = 'sunny-outline';
  gravatarUrl: string = '';
  trayectoria: any = {};
  user: any = {};

  constructor(
    private menu: MenuController,
    public darkModeService: DarkModeService,
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkMenuState(event.url);
      }
    });

    this.checkMenuState(this.router.url);
  }

  ngOnInit(): void {
    this.darkModeService.checkAppMode();
    this.loadHomeData();
    this.updateDarkModeIcon();
    this.loadGravatar();
  }

  checkMenuState(url: string) {
    if (url === '/login' || url === '/reset-password') {
      this.menu.enable(false, 'main-menu');
    } else {
      this.menu.enable(true, 'main-menu');
    }
  }

  loadGravatar() {
    this.authService.getGravatar(300).subscribe(
      response => {
        if (response.gravatar_url) {
          this.gravatarUrl = response.gravatar_url;
        } else {
          console.error('Gravatar URL not found in response');
        }
      },
      error => {
        console.error('Error fetching gravatar URL', error);
      }
    );
  }

  //---------- LOGICA DARK-MODE -------------------------------------------------------->

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.updateDarkModeIcon();
  }

  updateDarkModeIcon() {
    this.darkModeIcon = this.darkModeService.darkMode
      ? 'moon-outline'
      : 'sunny-outline';
  }

  // ----------------------------------------------------------------------------------->

  //Cierra el menu al cerrar sesión
  closeMenu() {
    this.menu.close();
  }

  // ----------------------------------------------------------------------------------->

  //logout ----------------------------------------------------------------------------->
  loadHomeData() {
    this.authService.getHome().subscribe(
      (response) => {
        if (response.estadisticas) {
          this.trayectoria = response.estadisticas.estadisticas;
          this.gravatarUrl = response.estadisticas.gravatar;
        } 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (response) => {
        if (response.status) {
          this.authService.clearSession();
          this.user = {}; // Limpia los datos del usuario
          this.closeMenu(); // Cierra el menú
          this.router.navigateByUrl('/login');
        } else {
          alert('Error al cerrar sesión');
        }
      },
      (error) => {
        console.error(error);
        alert('Error al cerrar sesión');
      }
    );
  }

  // ------------------------------------------------------------------------------------>
}
