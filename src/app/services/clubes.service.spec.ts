import { TestBed } from '@angular/core/testing';

import { ClubesService } from './clubes.service';

describe('ListarClubesService', () => {
  let service: ClubesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
