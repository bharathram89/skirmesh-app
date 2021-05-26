import { TestBed } from '@angular/core/testing';

import { NonSecureAPIService } from './non-secure-api.service';

describe('NonSecureAPIService', () => {
  let service: NonSecureAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonSecureAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
