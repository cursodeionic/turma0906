import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedServiceProvider {
  private _apiUrl = 'http://api.cursodeionic.com.br/posts';

  constructor(private _http: HttpClient) { }

  getFeed(): Observable<any> {
    return this._http.get(this._apiUrl);
  }
}
