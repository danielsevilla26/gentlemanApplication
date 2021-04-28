import { NgModule } from '@angular/core';
import { CommunityComponent } from './community.component';
import { SharedModule } from '@shared/shared.module';
import { CommunityRoutingModule } from '@modules/community/community-routing.module';


@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    SharedModule,
    CommunityRoutingModule
  ],
  exports:[
    SharedModule
  ]
})
export class CommunityModule { }
