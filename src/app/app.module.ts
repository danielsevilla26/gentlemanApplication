import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import * as fromComponents from '@layout/index';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {
      //Remove # to all routes
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
