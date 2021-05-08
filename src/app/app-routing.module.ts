import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '', component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () => 
        import ('@modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => 
        import ('@modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'community',
        loadChildren: () => 
        import ('@modules/community/community.module').then((m) => m.CommunityModule)
      },
      {
        path: 'youtube',
        loadChildren: () => 
        import ('@modules/youtube/youtube.module').then((m) => m.YoutubeModule)
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },//Default route
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
