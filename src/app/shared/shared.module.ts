import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { YoutubePipe } from 'src/app/shared/pipes/youtube.pipe';



@NgModule({
  declarations: [
    CardComponent,
    YoutubePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    CardComponent,
    //YoutubePipe
  ]
})
export class SharedModule { }
