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
      url: require("@assets/images/welcome.png").default,
      icons: []
    },
    {
      title: "Comparte lo que quieras",
      description: "Recuerda apoyar a la comunidad compartiendo información, sin olvidar los memes ;)",
      url: require("@assets/images/sharing.png").default,
      icons: []
    },
    {
      title: "Aprende constantemente",
      description: "En este apartado encuentra diferentes recursos de programación.",
      url: require("@assets/images/learning.png").default,
      icons: []
    },
    {
      title: "Canales de voz",
      description: "En el apartado final podrás ver los diferentes canales de comunicación.",
      url: require("@assets/images/channel.png").default,
      icons: []
    }
  ]

  public mentors: IImage[] = [
    {
      title: "Alan Buscaglia",
      description: "Enginner Front End Developer Architect with expertise in Angular with ngrx/store.",
      url: require("@assets/images/profile.jpg").default,
      icons: [ 
        {
          description: "bx bxl-linkedin",
          url: "https://www.linkedin.com/in/alanbuscaglia/"
        },
        {
          description: "bx bxl-instagram-alt",
          url: "https://www.instagram.com/alanbuscaglia/"
        },
        {
          description: "bx bxl-twitter",
          url: "https://twitter.com/alan_buscaglia"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
