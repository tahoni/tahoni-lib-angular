import { TestBed } from '@angular/core/testing';

import { TahoniLibService } from './tahoni-lib.service';

describe('TahoniLibService', () => {
  let service: TahoniLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TahoniLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
