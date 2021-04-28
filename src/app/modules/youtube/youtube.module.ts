import { NgModule } from '@angular/core';
import { YoutubeRoutingModule } from 'src/app/modules/youtube/youtube-routing.module';
import { SharedModule } from '@shared/shared.module';
import { YoutubeComponent } from '@modules/youtube/youtube.component';


@NgModule({
  declarations: [
    YoutubeComponent
  ],
  imports: [
    SharedModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
