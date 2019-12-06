import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list/site-list.component';
import {SiteDetailComponent} from './site-detail/site-detail.component';
import {InMemoryDataService} from './in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from './app-config.module';
import {SensorsComponent} from './sensors/sensors.component';
import {KodiYoutubeComponent} from './kodi-youtube/kodi-youtube.component';
import {FormsModule} from '@angular/forms';
import {SensorComponent} from './sensors/sensor/sensor.component';
import {NgxGauge, NgxGaugeModule} from 'ngx-gauge';
import {MqttModule} from 'ngx-mqtt';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				NgxGaugeModule,
				FormsModule,
				HttpClientModule,
				MqttModule.forRoot({}),
				InMemoryWebApiModule.forRoot(InMemoryDataService)
			],
			declarations: [
				AppComponent,
				SiteListComponent,
				SiteDetailComponent,
				KodiYoutubeComponent,
				SensorsComponent,
				SensorComponent
			],
			providers: [
				{provide: APP_CONFIG, useValue: {siteListEndpoint: '/api/sites'}}
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
