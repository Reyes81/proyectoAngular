import { TestBed } from '@angular/core/testing';

import { ListarTorneosService } from './listar-torneos.service';

describe('ListarTorneosService', () => {
  let service: ListarTorneosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTorneosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
