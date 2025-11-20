import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCygnusUiComponent } from './index-cygnus-ui.component';

describe('IndexCygnusUiComponent', () => {
  let component: IndexCygnusUiComponent;
  let fixture: ComponentFixture<IndexCygnusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCygnusUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCygnusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
