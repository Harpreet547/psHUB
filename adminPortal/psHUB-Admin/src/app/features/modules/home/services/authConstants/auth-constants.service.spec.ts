import { TestBed, inject } from '@angular/core/testing';

import { AuthConstantsService } from './auth-constants.service';

describe('AuthConstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthConstantsService]
    });
  });

  it('should be created', inject([AuthConstantsService], (service: AuthConstantsService) => {
    expect(service).toBeTruthy();
  }));
});
