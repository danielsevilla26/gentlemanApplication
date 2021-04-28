import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from '@modules/community/community.component';

const ROUTES: Routes = [
  {
    path: '', component: CommunityComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class CommunityRoutingModule { }

