import { TestBed } from '@angular/core/testing';

import { BajaJugadorService } from './baja-jugador.service';

describe('BajaJugadorService', () => {
  let service: BajaJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BajaJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
