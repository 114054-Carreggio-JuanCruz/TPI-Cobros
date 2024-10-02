import { TestBed } from '@angular/core/testing';

import { CobrosServiceService } from './cobros-service.service';

describe('CobrosServiceService', () => {
  let service: CobrosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobrosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
