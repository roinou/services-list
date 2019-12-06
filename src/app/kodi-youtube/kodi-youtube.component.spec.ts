import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KodiYoutubeComponent } from './kodi-youtube.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('KodiYoutubeComponent', () => {
  let component: KodiYoutubeComponent;
  let fixture: ComponentFixture<KodiYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
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
