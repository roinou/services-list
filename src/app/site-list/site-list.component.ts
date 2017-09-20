import { Component, OnInit } from '@angular/core';
import {Site} from "../site";
import {SiteService} from "../site.service"

@Component({
  selector: 'site-list',
  template: '<ul><li *ngFor="let site of sites">{{site.name}}</li></ul>',
  styleUrls: ['./site-list.component.styl']
})
export class SiteListComponent implements OnInit {

  sites: Site[];

  constructor(private listService: SiteService) {
  }

  ngOnInit() {
    this.sites = this.listService.getSites();
  }
}
