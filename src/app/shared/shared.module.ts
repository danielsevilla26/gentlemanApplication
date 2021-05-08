import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from '@shared/pipes/youtube.pipe';
import { CardComponent } from '@app/shared/components/cards/card-video/card-video.component';
import { LoadingScreenComponent } from '@shared/components/loading-screen/loading-screen.component';
import { SearchComponent } from '@shared/components/search/search.component';
import { CardImageComponent } from '@shared/components/cards/card-image/card-image.component';



@NgModule({
  declarations: [
    CardComponent,
    YoutubePipe,
    LoadingScreenComponent,
    SearchComponent,
    CardImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    CardComponent,
    YoutubePipe,
    LoadingScreenComponent,
    SearchComponent,
    YoutubePipe,
    CardImageComponent
  ]
})
export class SharedModule { }
