import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '@data/services/youtube.service';

import { IVideo } from '@app/shared/components/cards/card-video/iVideo.metadata';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  public sinVideos: string;
  public videos: IVideo[] = [];

  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  //Get videos
  private getVideos() {
    this.sinVideos = null;
    this.videos = null
    this._youtubeService.GetVideos().subscribe(
      (items: any) => {
        if(items.length > 0){
          this.videos = items.map(
            item => {
              return {
                title: item.snippet.title,
                id: item.id.videoId,
                description: item.snippet.description,
                date: new Date(item.snippet.publishedAt),
                url: item.snippet.thumbnails.medium.url
              }
            }
          )
        }
        else{
          this.sinVideos = "¡No se encontraron resultados, intenta nuevamente!"
        }
      }
    )
  }

  //Get videos per query
  public searchVideo(inputValue: string) {
    this.sinVideos = null;
    this.videos = null;
    this._youtubeService.searchVideo(inputValue).subscribe(
      (items: any) => {
        if(items.length > 0){
          this.videos = items.map(
            item => {
              return {
                title: item.snippet.title,
                id: item.id.videoId,
                description: item.snippet.description,
                date: new Date(item.snippet.publishedAt),
                url: item.snippet.thumbnails.medium.url
              }
            }
          )
        }
        else{
          this.sinVideos = "¡No se encontraron resultados, intenta nuevamente!"
        }
      }
    )
  }

}
