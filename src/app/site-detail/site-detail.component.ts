import {Component, Input, OnInit} from '@angular/core';
import {Site} from '../site';
import {SiteService} from '../site.service';

@Component({
	selector: 'site-detail',
	templateUrl: './site-detail.component.html',
})
export class SiteDetailComponent implements OnInit {

	@Input() site: Site;
	status: String;

	private static statusMap = {
		200: 'success'
	};

	constructor(private listService: SiteService) {
	}

	ngOnInit() {
		this.listService.querySite(this.site.url).subscribe(
			status => {
				let statusValue = SiteDetailComponent.statusMap[status];
				this.status = statusValue === undefined ?
					'list-group-item-danger' :
					'list-group-item-' + statusValue;
			},
			() => this.status = 'list-group-item-danger');
	}

}
