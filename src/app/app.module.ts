import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list/site-list.component';
import {SiteDetailComponent} from './site-detail/site-detail.component';
import {AppConfigModule} from './app-config.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		// InMemoryWebApiModule.forRoot(InMemoryDataService)
		AppConfigModule
	],
	declarations: [
		AppComponent,
		SiteListComponent,
		SiteDetailComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
