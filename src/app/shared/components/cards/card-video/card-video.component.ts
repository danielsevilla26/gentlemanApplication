import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IVideo } from '@app/shared/components/cards/card-video/iVideo.metadata';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: IVideo;

  public display = 'none';
  public videoId: string;
  public title: string;

  constructor() { }

  ngOnInit(): void {
  }

  public detailVideo(video: IVideo) {
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
