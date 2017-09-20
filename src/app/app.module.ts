import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    SiteListComponent,
    SiteDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
