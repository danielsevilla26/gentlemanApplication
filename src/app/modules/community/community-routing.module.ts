import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community.component';

const ROUTES: Routes = [
  {
    path: '', component: CommunityComponent
  }
  // {
  //   path: '', redirectTo: 'community', pathMatch: 'full'
  // },//Ruta default
  // {
  //   path: '**', redirectTo: 'community', pathMatch: 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class CommunityRoutingModule { }

