import { TestBed } from '@angular/core/testing';

import { ListarJugadoresService } from './listar-jugadores.service';

describe('ListarJugadoresService', () => {
  let service: ListarJugadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarJugadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
