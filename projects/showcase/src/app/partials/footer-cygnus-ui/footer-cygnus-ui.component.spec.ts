import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCygnusUiComponent } from './footer-cygnus-ui.component';

describe('FooterCygnusUiComponent', () => {
  let component: FooterCygnusUiComponent;
  let fixture: ComponentFixture<FooterCygnusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCygnusUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCygnusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
