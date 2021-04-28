import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeComponent } from '@modules/youtube/youtube.component';

const ROUTES: Routes = [
  {
    path: '', component: YoutubeComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule { }

