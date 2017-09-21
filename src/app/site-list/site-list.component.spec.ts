import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListComponent } from './site-list.component';
import {Injectable} from "@angular/core";
import {Site} from "../site";
import {SiteService} from "../site.service";
import {SiteDetailComponent} from "../site-detail/site-detail.component";

describe('SiteListComponent', () => {
  let component: SiteListComponent;
  let fixture: ComponentFixture<SiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SiteListComponent,
        SiteDetailComponent
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

  it('should list all sites', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('ul').children.length).toEqual(2);
    });
  }));
});

@Injectable()
class MockSiteService {

  private sitesCache: Site[];

  constructor() {
    this.sitesCache = [
      {name: 'test', url: 'testUrl'},
      {name: 'test2', url: 'test2Url'}
    ];
  }

  getSites(): Promise<Site[]> {
    return Promise.resolve(this.sitesCache);
  }
}
