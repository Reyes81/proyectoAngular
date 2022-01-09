import { TestBed } from '@angular/core/testing';

import { BajaService } from './baja.service';

describe('BajaJugadorService', () => {
  let service: BajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
