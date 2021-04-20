import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeComponent } from 'src/app/modules/youtube/youtube.component';

const ROUTES: Routes = [
  {
    path: '', component: YoutubeComponent
  },
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },//Ruta default
  // {
  //   path: '**', redirectTo: 'home', pathMatch: 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule { }

