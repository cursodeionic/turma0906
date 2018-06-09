import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {
  private _apiUrl = 'http://api.cursodeionic.com.br/users';
  
  constructor(private _http: HttpClient) { }

  createUser(data: any): Observable<any> {
    return this._http.post(this._apiUrl, data);
  }

}
