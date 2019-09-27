import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KodiYoutubeComponent } from './kodi-youtube.component';

describe('KodiYoutubeComponent', () => {
  let component: KodiYoutubeComponent;
  let fixture: ComponentFixture<KodiYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KodiYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KodiYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
