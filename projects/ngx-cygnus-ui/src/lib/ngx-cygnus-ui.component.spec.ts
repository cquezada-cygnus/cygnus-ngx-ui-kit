import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCygnusUiComponent } from './ngx-cygnus-ui.component';

describe('NgxCygnusUiComponent', () => {
  let component: NgxCygnusUiComponent;
  let fixture: ComponentFixture<NgxCygnusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCygnusUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCygnusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
