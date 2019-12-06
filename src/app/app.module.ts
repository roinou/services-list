import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list/site-list.component';
import {SiteDetailComponent} from './site-detail/site-detail.component';
import {AppConfigModule} from './app-config.module';
import { KodiYoutubeComponent } from './kodi-youtube/kodi-youtube.component';
import {IMqttServiceOptions, MqttModule} from 'ngx-mqtt';
import {SensorsModule} from './sensors/sensors.module';

import { environment } from '../environments/environment';
import {NgxGaugeModule} from 'ngx-gauge';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
	hostname: environment.MQTT_CONF.hostname,
	port: environment.MQTT_CONF.port,
	protocol: 'wss',
	path: environment.MQTT_CONF.target
};

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		// InMemoryWebApiModule.forRoot(InMemoryDataService)
		AppConfigModule,
		FormsModule,
		MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
		SensorsModule,
		NgxGaugeModule
	],
	declarations: [
		AppComponent,
		SiteListComponent,
		SiteDetailComponent,
		KodiYoutubeComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
