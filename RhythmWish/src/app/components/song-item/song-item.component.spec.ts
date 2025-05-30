import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongItemComponent } from './song-item.component';

describe('SongItemComponent', () => {
  let component: SongItemComponent;
  let fixture: ComponentFixture<SongItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
