import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCygnusUiComponent } from './header-cygnus-ui.component';

describe('HeaderCygnusUiComponent', () => {
  let component: HeaderCygnusUiComponent;
  let fixture: ComponentFixture<HeaderCygnusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCygnusUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCygnusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
