import {Inject, Injectable} from '@angular/core';
import {Site} from './site';
import {APP_CONFIG, AppConfig} from './app-config.module';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable()
export class SiteService {

	// private serviceUrl = '/assets/test-site.json';

	constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
	}

	getSites(): Observable<Site[]> {
		return this.http.get<Site[]>(this.config.siteListEndpoint);
	}

	querySite(url: string): Observable<number> {
		return this.http.get(url, {observe: 'response'}).pipe(map(response => response.status));
		//map(response => response.status);
	}
}
