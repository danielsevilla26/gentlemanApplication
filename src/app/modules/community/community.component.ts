import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    
  }
}
