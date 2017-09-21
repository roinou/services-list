import {Component, Input, OnInit} from '@angular/core';
import {Site} from "../site";
import {SiteService} from "../site.service";
import {isUndefined} from "util";

import 'rxjs/add/operator/catch';

@Component({
  selector: 'site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})
export class SiteDetailComponent implements OnInit {

  @Input() site: Site;
  status: String;

  private static statusMap = {
    200: 'success'
  };

  constructor(private listService: SiteService) { }

  ngOnInit() {
    this.listService.querySite(this.site.url).subscribe(
      status => {
        let statusValue = SiteDetailComponent.statusMap[status];
        this.status = isUndefined(statusValue) ?
          'list-group-item-danger' :
          'list-group-item-' + statusValue;
      },
      error => this.status = 'list-group-item-danger');
  }

}
