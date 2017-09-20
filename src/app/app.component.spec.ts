import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SiteListComponent} from "./site-list/site-list.component";
import {SiteDetailComponent} from "./site-detail/site-detail.component";
import {InMemoryDataService} from "./in-memory-data.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpModule} from "@angular/http";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      declarations: [
        AppComponent,
        SiteListComponent,
        SiteDetailComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Services List');
  }));
  it('should contain a site list', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('site-list')).toBeTruthy();
  }));
});
