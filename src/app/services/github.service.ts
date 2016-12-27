import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService {
  
  constructor (private _http: Http) { }
  
  private endpoints = {
    search: 'https://api.github.com/search/users?q=',
    
  };
  
  doSearchByUsername (username): Observable<any> {
    return this._http.get(`${this.endpoints.search}${username}`)
               .map((res: Response) => res.json())
               .catch((error: any) => Observable.throw(error.json().error || 'Server Error!'))
  }
  
  
}
