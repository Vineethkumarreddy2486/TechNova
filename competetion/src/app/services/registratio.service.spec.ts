import { TestBed } from '@angular/core/testing';

import { RegistratioService } from './registratio.service';

describe('RegistratioService', () => {
  let service: RegistratioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistratioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
