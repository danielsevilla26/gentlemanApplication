import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from '@shared/pipes/youtube.pipe';
import { CardComponent } from '@shared/components/card/card.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { SearchComponent } from '@shared/components/search/search.component';



@NgModule({
  declarations: [
    CardComponent,
    YoutubePipe,
    LoadingScreenComponent,
    SearchComponent
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
    YoutubePipe
  ]
})
export class SharedModule { }
