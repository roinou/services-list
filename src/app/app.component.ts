import {Component} from '@angular/core';
import {SiteService} from './site.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl'],
	providers: [SiteService]
})
export class AppComponent {
	title = 'Services List';
}
