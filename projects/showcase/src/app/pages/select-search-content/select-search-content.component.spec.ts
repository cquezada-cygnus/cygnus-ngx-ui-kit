import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearchContentComponent } from './select-search-content.component';

describe('SelectSearchContentComponent', () => {
  let component: SelectSearchContentComponent;
  let fixture: ComponentFixture<SelectSearchContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSearchContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSearchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
