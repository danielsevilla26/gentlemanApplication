import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/components/card/icard.metadata';
declare var $;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() data: ICard;
public videoId: string;
  constructor() { }

  ngOnInit(): void {
  }

  public detailVideo(id: string){
    this.videoId = id;
    $('#youtubeVideo').modal();
  }

  public closeModal(){
    this.videoId = null;
    $('#youtubeVideo').modal('hide');
  }
}
