import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '@data/services/youtube.service';

import { IVideo } from '@app/shared/components/cards/card-video/iVideo.metadata';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  public videos: IVideo[] = [];
  public videoss: IVideo[] = [
    {
      id: "9_8Biy10kW0",
      title: 'Programando de 0 !',
      description: 'Hoy vamos a aprender a programar desde 0 !! Veremos qué es un programador, cómo cambiaremos nuestras formas de pensar y les daré tips para poder realizar este ejemplo necesitamos de su ayuda para que todo salga bien y realizar parties todo el dia con el motivo del dia del niño',
      url: 'https://i.ytimg.com/vi/9_8Biy10kW0/mqdefault.jpg',
      date: '2021-03-19T18:48:40Z'
    },
    {
      id: "NkjBZBDIzgY",
      title: 'Hagamos una app en Angular, PT 1',
      description: 'Buenas gente ! vamos a hacer una app en Angular, veamos buenas prácticas, formas de trabajar, herramientas, etc. Lo importante a considerar es que NADA ...',
      url: 'https://i.ytimg.com/vi/NkjBZBDIzgY/mqdefault.jpg',
      date: '2020-09-17T16:41:51Z'
    },
    {
      id: "doK4uwbA1ps",
      title: 'Hablemos Sobre Ti ! con la participación de Diego Pagini',
      description: 'Continuaremos con la section \"Hablemos Sobre Ti\", donde TÚ eres quién comanda la entrevista, junto al señor Diego Pagini, que nos contará su historia.',
      url: 'https://i.ytimg.com/vi/doK4uwbA1ps/mqdefault.jpg',
      date: '2020-12-25T06:00:43Z'
    },
    {
      id: "-pm-qPqNqgY",
      title: 'Haciendo un Portfolio Web en ReactJs',
      description: 'Hoy vamos a aprender juntos a hacer un portfolio web en React Js ! Voy a mostrarles como elijo los colores e implemento un diseño que pueden reutilizar.',
      url: 'https://i.ytimg.com/vi/-pm-qPqNqgY/mqdefault.jpg',
      date: '2021-02-19T21:13:43Z'
    },
    {
      id: "doK4uwbA1ps",
      title: 'Hablemos Sobre Ti ! con la participación de Diego Pagini',
      description: 'Continuaremos con la section \"Hablemos Sobre Ti\", donde TÚ eres quién comanda la entrevista, junto al señor Diego Pagini, que nos contará su historia.',
      url: 'https://i.ytimg.com/vi/doK4uwbA1ps/mqdefault.jpg',
      date: '2020-12-25T06:00:43Z'
    },
    {
      id: "-pm-qPqNqgY",
      title: 'Haciendo un Portfolio Web en ReactJs',
      description: 'Hoy vamos a aprender juntos a hacer un portfolio web en React Js ! Voy a mostrarles como elijo los colores e implemento un diseño que pueden reutilizar.',
      url: 'https://i.ytimg.com/vi/kFve97vLzWk/mqdefault.jpg',
      date: '2021-02-19T21:13:43Z'
    }
  ];

  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  private getVideos() {
    this._youtubeService.GetVideos().subscribe(
      (items: any) => {
        this.videos = items.map(
          item => {
            console.log(item);
            return {
              title: item.snippet.title,
              id: item.id.videoId,
              description: item.snippet.description,
              date: new Date(item.snippet.publishedAt),
              url: item.snippet.thumbnails.medium.url
            }
          }
        )
      }
    )
  }

  public searchVideo(inputValue: string) {
    this._youtubeService.searchVideo(inputValue).subscribe(
      (items: any) => {
        this.videos = items.map(
          item => {
            console.log(item);
            return {
              title: item.snippet.title,
              id: item.id.videoId,
              description: item.snippet.description,
              date: new Date(item.snippet.publishedAt),
              url: item.snippet.thumbnails.medium.url
            }
          }
        )
      }
    )
  }

}
