import { Component, OnInit } from '@angular/core';
import { IImage } from '@app/shared/components/cards/card-image/iImage.metadata';
declare var require: any;

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
      url: require("@assets/images/welcome.png").default
    },
    {
      title: "Comparte lo que quieras",
      description: "Recuerda apoyar a la comunidad compartiendo información, sin olvidar los memes ;)",
      url: require("@assets/images/sharing.png").default
    },
    {
      title: "Aprende constantemente",
      description: "En este apartado encuentra diferentes recursos de programación.",
      url: require("@assets/images/learning.png").default
    },
    {
      title: "Canales de voz",
      description: "En el apartado final podrás ver los diferentes canales de comunicación",
      url: require("@assets/images/channel.png").default
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
