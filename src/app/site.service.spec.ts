import {inject, TestBed} from '@angular/core/testing';

import {SiteService} from './site.service';
import {HttpModule, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('SiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [
        SiteService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });


    /*this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      SiteService,
    ]);
    this.service = this.injector.get(SiteService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);*/

  });

  /*it('should return an Observable<Array<Site>>', inject([SiteService, XHRBackend], (siteService, mockBackend) => {

      const mockResponse = {
        data: [
          { name: 'sonic', url: 'the' },
          { name: 'youth', url: 'eternal' }
        ]
      };

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      siteService.getSites().subscribe(sites => {
        expect(sites.length).toBe(2);
      });

    }));*/

  it('getSites() should query current service url', inject([SiteService, XHRBackend], (siteService, mockBackend) => {
    let lastConnection;
    mockBackend.connections.subscribe((connection: any) => lastConnection = connection);
    siteService.getSites();
    expect(lastConnection).toBeDefined('no http service connection at all?');
    // expect(this.lastConnection.request.url).toMatch(/api\/heroes$/, 'url invalid');
  }));

  /*it('getSites() should return some sites', fakeAsync(() => {
    let result: String[];
    this.service.getSites().then((sites: String[]) => result = sites);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      // body: JSON.stringify({data: [{name: "passenger", url: "testUrl"}, {name: "lust for life", url: "test2Url"}]}),
      body: JSON.stringify({data: ["sonic", "youth"]}),
      // body: '{data: ["name": "passenger","url": "testUrl"},{"name": "lust for life","url": "test2Url"}]}'
    })));
    tick();
    expect(result.length).toEqual(2);
  }));

  it('getSites() while server is down', fakeAsync(() => {
    let result: Site[];
    let catchedError: any;
    this.service.getSites()
      .then((sites: Site[]) => result = sites)
      .catch((error: any) => catchedError = error);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      status: 404,
      statusText: 'URL not Found',
    })));
    tick();
    expect(result).toBeUndefined();
    expect(catchedError).toBeDefined();
  }));*/
});
