import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton.component';
import { HomeComponent } from 'src/app/modules/home/home.component';

const routes: Routes = [
  {
    path: '', component: SkeletonComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => 
        import ('./modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'community',
        loadChildren: () => 
        import ('./modules/community/community.module').then((m) => m.CommunityModule)
      },
      {
        path: 'youtube',
        loadChildren: () => 
        import ('./modules/youtube/youtube.module').then((m) => m.YoutubeModule)
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },//Ruta default
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
