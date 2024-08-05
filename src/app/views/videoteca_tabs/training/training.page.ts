import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/model/video.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  trainingVideos: { id: number, titulo: string, video_url: string, fecha_creacion: string, thumbnail: string }[] = [];
  filterTerm: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.authService.getVideosYoutube().subscribe((data: any) => {
      this.trainingVideos = data.videos_youtube
        .filter((vid: any) => vid.categoria_id === 2)
        .map((vid: any, index: number) => ({
          id: index,
          titulo: vid.titulo,
          video_url: vid.video_url,
          fecha_creacion: vid.fecha_creacion,
          thumbnail: this.getYoutubeThumbnail(vid.video_url)
        }));
    }, (error) => {
      console.error("Error al cargar los videos", error);
    }); 
  }

  getYoutubeThumbnail(videoUrl: string): string {
    const videoId = this.extractVideoId(videoUrl);
    return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : '';
  }

  extractVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|youtu.be\?si=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }

  downloadVideo(url: string) {
    window.open(url, '_blank');
  }
}
