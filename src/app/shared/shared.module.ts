import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from '@shared/pipes/youtube.pipe';
import { CardComponent } from '@shared/components/card/card.component';



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
    YoutubePipe
  ]
})
export class SharedModule { }
