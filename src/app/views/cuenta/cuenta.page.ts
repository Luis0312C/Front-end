import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  InformacionE: any[] = [];
  gravatarUrl: string = '';
  @ViewChild('modalChangePassword') modalChangePassword?: IonModal;
  @ViewChild('modalDescription') modalDescription?: IonModal;

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  description: string = ''; 



  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadInformacionData();
    this.loadGravatar();
  }

  openCustomDialog() {
    this.modalChangePassword?.present();
  }

  openDescriptionDialog() {
    this.modalDescription?.present();
  }

  getGenero(genero: string): string {
    return genero === 'M' ? 'Masculino' : genero === 'F' ? 'Femenino' : genero;
  }

  getRegion(id_region: number): string {
    return id_region === 21 ? 'Córdoba' 
    : id_region === 22 ? 'Guadalajara' 
    : id_region === 23 ? 'Tijuana' 
    : id_region === 24 ? 'Aguascalientes' 
    : id_region === 25 ? 'Mérida'
    : id_region === 26 ? 'Ciudad de México'
    : id_region === 27 ? 'Puebla'
    : id_region === 28 ? 'Monterrey'
    : id_region === 29 ? 'Colombia'
    : id_region === 30 ? 'León'
    : id_region === 31 ? 'Perú'
    : id_region === 32 ? 'San Luis Potosí'
    : id_region === 33 ? 'Chile'
    : id_region === 34 ? 'Coatzacoalcos'
    : id_region === 35 ? 'Culiacán'
    : id_region === 36 ? 'Xalapa'
    : id_region === 37 ? 'Argentina'
    : id_region === 38 ? 'Ecuador'
    : id_region === 39 ? 'Veracruz'
    : id_region === 40 ? 'Uruguay'
    : id_region === 41 ? 'Costa Rica'
    : id_region === 42 ? 'Baja California'
    : id_region === 43 ? 'Tabasco'
    : id_region === 44 ? 'Estados Unidos'
    : id_region === 45 ? 'Oaxaca'
    : id_region.toString();
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

  loadInformacionData(): void {
    this.authService.getCuenta().subscribe(response => {
      if (response && response.info_personal) {
        this.InformacionE = response.info_personal;
      } else {
        console.error('No se encontró información personal en la respuesta');
      }
    }, error => {
      console.error(error);
    });
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.showError('La nueva contraseña y la confirmación no coinciden');
      return;
    }

    const requestData = {
      current_password: this.currentPassword,
      new_password: this.newPassword,
      new_password_confirmation: this.confirmPassword 
    };

    this.authService.changePassword(requestData).subscribe(
      response => {
        console.log('Response:', response);  
        if (response.success) {
          this.modalChangePassword?.dismiss();
          this.reset();
          alert('Contraseña cambiada exitosamente');
        } else {
          this.showError(response.message || 'Error al cambiar la contraseña'); 
        }
      },
      error => {
        console.error('Error al cambiar la contraseña', error);
        this.showError(error.error.message || 'Error al cambiar la contraseña');
      }
    );
  }

  saveDescription() {
    this.authService.Descripcion(this.description).subscribe(
      response => {
        if (response.success) {
          alert('Descripción actualizada exitosamente');
          this.modalDescription?.dismiss();
          this.description = '';
        } else {
          this.showError(response.message || 'Error al actualizar la descripción');
        }
      },
      error => {
        this.showError(error.error.message || 'Error al actualizar la descripción');
      }
    );
  }

  private showError(message: string): void {
    alert(message);
  }

  reset(){
    this.currentPassword ='';
    this.newPassword = '';
    this.confirmPassword = ''; 
    this.description = '';
    }
    
    cancelPassword() {
      this.modalChangePassword?.dismiss();
      this.reset(); 
    }
    
        
    cancelAbout() {
      this.modalDescription?.dismiss();
      this.reset(); 
    }

}
