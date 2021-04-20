import { NgModule } from '@angular/core';
import { YoutubeRoutingModule } from 'src/app/modules/youtube/youtube-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
