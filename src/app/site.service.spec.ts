import { TestBed, inject } from '@angular/core/testing';

import { SiteService } from './site.service';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpModule} from "@angular/http";

describe('SiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [
        SiteService
      ]
    });
  });

  it('should be created', inject([SiteService], (service: SiteService) => {
    expect(service).toBeTruthy();
  }));
});
