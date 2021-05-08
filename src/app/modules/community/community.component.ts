import { Component, OnInit } from '@angular/core';
import { IImage } from '@app/shared/components/cards/card-image/iImage.metadata';

declare var require: any;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  public images: IImage[] = [
    {
      title: "Te damos la bienvenida",
      description: "Aquí podrás presentarte y obtendrás información general de la comunidad.",
      url: "/assets/images/welcome.png"
    },
    {
      title: "Comparte lo que quieras",
      description: "Recuerda apoyar a la comunidad compartiendo información, sin olvidar los memes ;)",
      url: "/assets/images/sharing.png"
    },
    {
      title: "Aprende constantemente",
      description: "En este apartado encuentra diferentes recursos de programación.",
      url: "/assets/images/learning.png"
    },
    {
      title: "Canales de voz",
      description: "En el apartado final podrás ver los diferentes canales de comunicación",
      url: "/assets/images/channel.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

}
