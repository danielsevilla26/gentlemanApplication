import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from '@shared/pipes/youtube.pipe';
import { CardComponent } from '@shared/components/card/card.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';



@NgModule({
  declarations: [
    CardComponent,
    YoutubePipe,
    LoadingScreenComponent
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
    LoadingScreenComponent
  ]
})
export class SharedModule { }
