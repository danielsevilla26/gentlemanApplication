import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '@app/core/interceptors/loading.interceptor';


@NgModule({
  declarations: [
  
  ],
  imports: [
  ],
  exports: [
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
