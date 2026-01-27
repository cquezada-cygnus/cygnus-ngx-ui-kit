import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRecorderContentComponent } from './video-recorder-content.component';

describe('VideoRecorderContentComponent', () => {
  let component: VideoRecorderContentComponent;
  let fixture: ComponentFixture<VideoRecorderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoRecorderContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRecorderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
