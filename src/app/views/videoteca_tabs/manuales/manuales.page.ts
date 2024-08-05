import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/model/video.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.page.html',
  styleUrls: ['./manuales.page.scss'],
})
export class ManualesPage implements OnInit {
  ADS: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  Auditorias: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  Comercial: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  Contratos: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  Disenio: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  Emails: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  Links: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  SMM: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];
  TIS: { id: number, titulo: string, video_url: string, icono: string, fecha_creacion: string }[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getVideosDepartamento().subscribe(
      (data) => {
        if (Array.isArray(data.videos_departamento)) {
          this.ADS = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 1)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
          this.Auditorias = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 2)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.Comercial = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 3)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.Contratos = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 4)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.Disenio = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 5)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.Emails = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 6)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.Links = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 7)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.SMM = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 8)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
            this.TIS = (data.videos_departamento as Video[])
            .filter((vid) => vid.depto_id === 9)
            .map((vid) => ({
              id: vid.depto_id,
              titulo: vid.titulo,
              video_url: vid.video_url,
              icono: this.getIcono(vid.video_url),
              fecha_creacion: vid.fecha_creacion,
            }));
        } else {
          console.error('Error de carga');
        }
      },
      (error) => {
        console.error('Error al obtener documentos:', error);
      }
    );
  }

  getIcono(url: string): string {
    const googleDrivePattern = /\/file\/d\/(.+?)\/view/;

    if (googleDrivePattern.test(url)) {

      return '../assets/google-drive.png';
    }

    const extension = url.split('.').pop();

    switch (extension) {
      case 'mp4':
        return '../assets/mp4.png';
      default:
        return '../assets/mp4.png';
    }
  }

  downloadDocument(fileName: string) {
    const baseUrl = 'http://192.168.1.77/videos/';
    const fileUrl = `${baseUrl}${fileName}`;
    window.open(fileUrl, '_blank');
  }
}
