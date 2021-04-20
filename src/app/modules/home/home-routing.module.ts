import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';

const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
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

export class HomeRoutingModule { }

