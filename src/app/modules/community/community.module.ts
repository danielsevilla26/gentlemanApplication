import { NgModule } from '@angular/core';
import { CommunityComponent } from './community.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommunityRoutingModule } from 'src/app/modules/community/community-routing.module';


@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    SharedModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
