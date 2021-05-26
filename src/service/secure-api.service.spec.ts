import { TestBed } from '@angular/core/testing';

import { SecureAPIService } from './secure-api.service';

describe('SecureAPIService', () => {
  let service: SecureAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
