import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  public welcomeImg = require("../../../assets/images/welcome.png");
  public sharingImg = require("../../../assets/images/sharing.png");
  public channelImg = require("../../../assets/images/channel.png");
  public learningImg = require("../../../assets/images/learning.png");

  public links: Array<LinkModel> = [
    {
      link: 'https://www.youtube.com/channel/UCCsXrAdp6S4k2UxJm-fKN-g/featured',
      icon: '<i class="uil uil-youtube"></i>'
    },
    {
      link: 'https://github.com/danielsevilla26',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'mailto:sevillakristell@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://www.linkedin.com/in/danielsevilla565aa6115/',
      icon: '<i class="uil uil-linkedin-alt"></i>'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}

class LinkModel{
  link: string;
  icon: string;
}