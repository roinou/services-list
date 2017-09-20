import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Site} from "./site";
import "rxjs/add/operator/toPromise";

@Injectable()
export class SiteService {

  constructor(private http: Http) {
  }

  getSites(): Promise<Site[]> {
    return this.http.get('/api/sites')
      .toPromise()
      .then(response => response.json().data as Site[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
