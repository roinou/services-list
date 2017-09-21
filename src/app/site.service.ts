import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Site} from "./site";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class SiteService {

  constructor(private http: Http) {
  }

  getSites(): Observable<Site[]> {
    return this.http.get('/api/sites').map(response => response.json().data)
  }

  querySite(url: string): Observable<number> {
    return this.http.get(url).map(response => response.status);
  }
}
