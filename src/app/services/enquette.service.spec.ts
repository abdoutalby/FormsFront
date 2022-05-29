import { TestBed } from '@angular/core/testing';

import { EnquetteService } from './enquette.service';

describe('EnquetteService', () => {
  let service: EnquetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
