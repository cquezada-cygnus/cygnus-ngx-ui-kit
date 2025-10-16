import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLeftCygnusUiComponent } from './sidebar-left-cygnus-ui.component';

describe('SidebarLeftCygnusUiComponent', () => {
  let component: SidebarLeftCygnusUiComponent;
  let fixture: ComponentFixture<SidebarLeftCygnusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarLeftCygnusUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLeftCygnusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
