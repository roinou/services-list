import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { SiteListComponent } from './site-list.component';
import {Injectable} from "@angular/core";
import {Site} from "../site";
import {SiteDetailComponent} from "../site-detail/site-detail.component";
import {Observable} from "rxjs/Observable";
import {SiteService} from "../site.service";

import "rxjs/add/observable/of";

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

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should list all sites', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.list-group').children.length).toEqual(2);
    });
  }));
});

@Injectable()
class MockSiteService {

  constructor() {
  }

  getSites(): Observable<Site[]> {
    return Observable.of([
      {name: 'test', url: 'testUrl'},
      {name: 'test2', url: 'test2Url'}
    ]);
  }

  querySite(url: string): Observable<number> {
    return Observable.of(200);
  }
}
