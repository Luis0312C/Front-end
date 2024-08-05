import { Component, OnInit, ViewChild,  } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Documento } from 'src/app/model/documento.model';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage implements OnInit {

  puestos: { id: number; titulo: string; icono: string; url: string }[] =[];
  auditorias: { id: number; titulo: string; icono: string; url: string }[] = [];
  comerciales: { id: number; titulo: string; icono: string; url: string }[] = [];
  contabilidades: { id: number; titulo: string; icono: string; url: string }[] = [];
  contenidos: { id: number; titulo: string; icono: string; url: string }[] = [];
  contratos: { id: number; titulo: string; icono: string; url: string }[] = [];  
  disenios: { id: number; titulo: string; icono: string; url: string }[] =[];
  emails: { id: number; titulo: string; icono: string; url: string }[] = [];
  googleAds: { id: number; titulo: string; icono: string; url: string }[] = [];
  links: { id: number; titulo: string; icono: string; url: string }[] = [];
  SMMS: { id: number; titulo: string; icono: string; url: string }[] = [];
  TIS: { id: number; titulo: string; icono: string; url: string }[] = [];
  trainings: { id: number; titulo: string; icono: string; url: string }[] = [];
  UXS: { id: number; titulo: string; icono: string; url: string }[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getDocumentosConSubcategoria().subscribe(
      (data) => {
        if (Array.isArray(data.documento_url)) {
          this.puestos = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 6)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.auditorias = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 7)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.comerciales = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 8)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.contabilidades = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 9)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.contenidos = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 10)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.contratos = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 11)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.disenios = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 12)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.emails = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 13)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.googleAds = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 14)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.links = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 15)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.SMMS = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 16)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.TIS = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 17)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.trainings = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 18)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
            this.UXS = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 19)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
        } else {
          console.error('La respuesta no es un array');
        }
      },
      (error) => {
        console.error('Error al obtener documentos:', error);
      }
    );
  }

  getIcono(url: string): string {

    const extension = url.split('.').pop();


    switch (extension) {
      case 'docx':
        return '../assets/doc.png';
      case 'xlsx':
        return '../assets/xls.png';
      case 'pptx':
        return '../assets/pptx.png';
      case 'pdf':
        return '../assets/pdf.png';
      case 'png':
        return '../assets/png.png';
      default:
        return '../assets/doc.png'; 
    }
  }

  downloadDocument(fileName: string) {

    const baseUrl = 'https://optimizacion-online.asia/Archivos/';

    const fileUrl = `${baseUrl}${fileName}`;

    window.open(fileUrl, '_blank');
  }
  
  
}