import {Component, Input, OnInit} from '@angular/core';
import {Site} from "../site";

@Component({
  selector: 'site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.styl']
})
export class SiteDetailComponent implements OnInit {

  @Input() site: Site;

  constructor() { }

  ngOnInit() {
  }

}
