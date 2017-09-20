import { Injectable } from '@angular/core';
import {Site} from "./site";

@Injectable()
export class SiteService {

  private sitesCache: Site[];

  constructor() {
    this.sitesCache = [];
    this.sitesCache.push({name: 'test', url: 'testUrl'});
    this.sitesCache.push({name: 'test2', url: 'test2Url'});
  }

  getSites(): Site[] {
    return this.sitesCache;
  }
}
