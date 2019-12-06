import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsComponent } from './sensors.component';
import {NgxGauge} from 'ngx-gauge';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxGauge],
      declarations: [ SensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
