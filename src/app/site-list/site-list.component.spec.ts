import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListComponent } from './site-list.component';
import {Injectable} from "@angular/core";
import {Site} from "../site";
import {SiteService} from "../site.service";

describe('SiteListComponent', () => {
  let component: SiteListComponent;
  let fixture: ComponentFixture<SiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SiteListComponent
      ],
      providers: [{provide: SiteService, useClass: MockSiteService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Injectable()
class MockSiteService {

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
