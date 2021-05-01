import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { LoadingService } from '@shared/services/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{
    constructor(private _loadingService: LoadingService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        this._loadingService.showSpinner();

        return next.handle(req).pipe(
            finalize(() => this._loadingService.hideSpinner())
        );
    }
}