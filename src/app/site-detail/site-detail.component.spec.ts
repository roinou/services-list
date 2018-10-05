import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SiteDetailComponent} from './site-detail.component';
import {SiteService} from '../site.service';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

describe('SiteDetailComponent', () => {
	let component: SiteDetailComponent;
	let fixture: ComponentFixture<SiteDetailComponent>;
	let siteService: SiteService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SiteDetailComponent],
			providers: [{provide: SiteService, useClass: MockSiteService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SiteDetailComponent);
		component = fixture.componentInstance;
		component.site = {name: 'test', url: 'http://grateful.dead'};
		siteService = fixture.debugElement.injector.get(SiteService);
		// fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should be green if status is 200', () => {
		let spy = mockStatus(200);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('.list-group-item').classList).toContain('list-group-item-success');
		expect(spy.calls.any()).toEqual(true);
	});

	it('should be red if status is not 200', () => {
		let spy = mockStatus(300);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('.list-group-item').classList).toContain('list-group-item-danger');
		expect(spy.calls.any()).toEqual(true);
	});

	it('should be red if query is in error', () => {
		let spy = spyOn(siteService, 'querySite').and.returnValue(throwError('error'));
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('.list-group-item').classList).toContain('list-group-item-danger');
		expect(spy.calls.any()).toEqual(true);
	});

	let mockStatus = function (status: number) {
		status = status || 200;
		return spyOn(siteService, 'querySite').and.returnValue(of(status));
	};
});


@Injectable()
class MockSiteService {

	constructor() {
	}

	querySite(url: string): Observable<number> {
		return of(200);
	}
}
