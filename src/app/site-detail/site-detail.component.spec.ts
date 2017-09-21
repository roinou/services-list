import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDetailComponent } from './site-detail.component';
import {SiteService} from "../site.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

describe('SiteDetailComponent', () => {
  let component: SiteDetailComponent;
  let fixture: ComponentFixture<SiteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDetailComponent ],
      providers: [{provide: SiteService, useClass: MockSiteService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDetailComponent);
    component = fixture.componentInstance;
    component.site = {name: 'test', url: 'http://grateful.dead'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Injectable()
class MockSiteService {

  constructor() {}

  querySite(url: string): Observable<number> {
    return Observable.of(200);
  }
}
