import { TestBed } from '@angular/core/testing';

import { FederacionesService } from './federaciones.service';

describe('ListarFederacionesService', () => {
  let service: FederacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FederacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
