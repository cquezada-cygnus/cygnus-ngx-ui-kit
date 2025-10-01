import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CygnusInputComponent } from './cygnus-input.component';

describe('CygnusInputComponent', () => {
  let component: CygnusInputComponent;
  let fixture: ComponentFixture<CygnusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CygnusInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CygnusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
