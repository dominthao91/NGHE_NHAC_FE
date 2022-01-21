import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlaylistComponent } from './home-playlist.component';

describe('HomePlaylistComponent', () => {
  let component: HomePlaylistComponent;
  let fixture: ComponentFixture<HomePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
