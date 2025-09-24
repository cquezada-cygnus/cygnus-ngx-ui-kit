import { TestBed } from '@angular/core/testing';

import { NgxCygnusUiService } from './ngx-cygnus-ui.service';

describe('NgxCygnusUiService', () => {
  let service: NgxCygnusUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCygnusUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
