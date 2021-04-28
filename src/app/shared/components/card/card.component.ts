import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '@shared/components/card/icard.metadata';
declare var $;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() data: ICard;
public videoId: string;
public title: string;
  constructor() { }

  ngOnInit(): void {
  }

  public detailVideo(video: ICard){
    this.videoId = video.id;
    this.title = video.title;
    console.log(this.videoId);
    console.log(this.title);
    $('#youtubeVideo').modal();
  }

  public closeModal(){
    this.videoId = null;
    this.title = null;
    $('#youtubeVideo').modal('hide');
  }
}
