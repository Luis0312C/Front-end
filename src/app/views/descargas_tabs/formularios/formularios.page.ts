import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
})
export class FormulariosPage implements OnInit {
  formularios: { id: number; titulo: string; documento_url: string }[] = [];

  constructor(private authService : AuthService) { }

  ngOnInit() { 
    this.loadDocumentos();
  }

  loadDocumentos() {
    this.authService.getDocumentosSinSubcategoria().subscribe((data: any) => {
      this.formularios = data.documento_url.map((doc: any) => ({
        id: doc.id,
        titulo: doc.titulo,
        documento_url: doc.documento_url
      }));
    });
  }

  downloadDocument(url: string) {
    window.open(url, '_blank');
  }

}
