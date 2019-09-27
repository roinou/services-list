import {Component, OnInit} from '@angular/core';
import {Site} from "../site";
import {SiteService} from "../site.service"

@Component({
  selector: 'site-list',
  template: '<div class="list-group"><site-detail *ngFor="let site of sites" [site]="site"></site-detail></div>',
})
export class SiteListComponent implements OnInit {

  sites: Site[];

  constructor(private listService: SiteService) {
  }

  ngOnInit() {
    this.getSites();
  }

  private getSites() {
    this.listService.getSites().subscribe(sites => {
      this.sites = sites;
      console.log(sites);
    })
  }
}
