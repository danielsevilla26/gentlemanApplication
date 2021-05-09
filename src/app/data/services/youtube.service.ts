import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string = environment.urlYoutube;
  private api_key: string = "AIzaSyAMU81_VBshA7vGQSRcnyuciBcYQc1pOUY";
  private channel: string = "UCbx_d228PdYwgB4Jz202SIQ";
  constructor(private _http: HttpClient) { }

  public GetVideos():Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('channelId', this.channel)
      .set('maxResults', '6')
      .set('key', this.api_key);

    return this._http.get(`${this.url}/search`, { params: params })
      .pipe(map((resp: any) => resp.items));
  }

  public searchVideo(query: string){
    const params = new HttpParams()
      .set('q', query)
      .set('part', 'snippet')
      .set('channelId', this.channel)
      .set('type', 'video')
      .set('maxResults', '6')
      .set('key', this.api_key);

      return this._http.get(`${this.url}/search`, { params: params })
      .pipe(map((resp: any) => resp.items));
  }
}
