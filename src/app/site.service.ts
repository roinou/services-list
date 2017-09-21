import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Site} from "./site";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import {APP_CONFIG, AppConfig} from "./app-config.module";

@Injectable()
export class SiteService {

  // private serviceUrl = '/assets/test-site.json';

  constructor(private http: Http, @Inject(APP_CONFIG) private config: AppConfig) {
  }

  getSites(): Observable<Site[]> {
    return this.http.get(this.config.siteListEndpoint).map(response => response.json().data)
  }

  querySite(url: string): Observable<number> {
    return this.http.get(url).map(response => response.status);
  }
}
