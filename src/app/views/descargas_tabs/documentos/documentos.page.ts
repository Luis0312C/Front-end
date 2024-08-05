import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/model/documento.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {
  prospeccion: { id: number; titulo: string; icono: string; url: string }[] =[];
  manuales: { id: number; titulo: string; icono: string; url: string }[] = [];
  clientes: { id: number; titulo: string; icono: string; url: string }[] = [];
  contratos: { id: number; titulo: string; icono: string; url: string }[] = [];
  propuestas: { id: number; titulo: string; icono: string; url: string }[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getDocumentosConSubcategoria().subscribe(
      (data) => {
        if (Array.isArray(data.documento_url)) {
          this.prospeccion = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 1)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.manuales = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 2)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.clientes = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 3)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.contratos = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 4)
            .map((doc) => ({
              id: doc.subcategoria_id,
              titulo: doc.titulo,
              icono: this.getIcono(doc.documento_url),
              url: doc.documento_url,
            }));
          this.propuestas = (data.documento_url as Documento[])
            .filter((doc) => doc.subcategoria_id === 5)
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
