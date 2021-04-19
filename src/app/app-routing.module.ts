import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '', component: SkeletonComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren() => 
    //     import {}
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
