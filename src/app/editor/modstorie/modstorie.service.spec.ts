import { TestBed } from '@angular/core/testing';

import { ModstorieService } from './modstorie.service';

describe('ModstorieService', () => {
  let service: ModstorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModstorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
