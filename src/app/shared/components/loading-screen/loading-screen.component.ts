import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';
declare var require: any;

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  public loading = require("@assets/images/loading.png");
  public isLoading$ = this._loadingService.isLoading$;

  constructor(private _loadingService: LoadingService) { 
    console.log(this.isLoading$);
  }

}
