import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ICard } from '@shared/components/card/icard.metadata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICard;

  public display = 'none';
  public videoId: string;
  public title: string;

  constructor() { }

  ngOnInit(): void {
  }

  public detailVideo(video: ICard) {
    this.videoId = video.id;
    this.title = video.title;
    this.display = 'block';
  }

  public closeModal() {
    this.videoId = '';
    this.title = '';
    this.display = 'none';
  }
}
