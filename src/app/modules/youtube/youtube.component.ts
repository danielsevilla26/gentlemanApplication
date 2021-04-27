import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../data/services/youtube.service';

import { ICard } from 'src/app/shared/components/card/icard.metadata';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
// public videos: ICard[] = [];
public videos: ICard[] = [
  {
    id: "9_8Biy10kW0",
    title: 'Programando de 0 !',
    description: 'Hoy vamos a aprender a programar desde 0 !! Veremos qué es un programador, cómo cambiaremos nuestras formas de pensar y les daré tips para poder realizar este ejemplo necesitamos de su ayuda para que todo salga bien y realizar parties todo el dia con el motivo del dia del niño',
    url: 'https://i.ytimg.com/vi/9_8Biy10kW0/mqdefault.jpg',
    date: '2021-03-19T18:48:40Z'
  },
  {
    id: "ytc",
    title: 'Gentleman Programming',
    description: 'Hola gente !! Cómo andamos ? Bienvenidos a este canal especial para programadores y gente a la que le gusta el mundo de la programación web ! Se suben ...',
    url: 'https://yt3.ggpht.com/ytc/AAUvwnidYtpfmvRgE4bJUJ6rQw7QRdx1ydU6JnQbTspr=s240-c-k-c0xffffffff-no-rj-mo',
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
  }
];

  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    // this.getVideos();
  }

  private getVideos(){
    this._youtubeService.GetVideos().subscribe(
      async response =>{
        var data = await response.items;
        data.forEach(element => {
          let video : ICard ={
            id: element.id.videiId,
            title: element.snippet.title,
            description: element.snnipet.title,
            url: element.snnipet.thumbnails.medium.url,
            date: element.snnipet.publishedAt
          }
          this.videos.push(video);
        });
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    ); 
  }

}
