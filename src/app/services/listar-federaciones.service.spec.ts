import { TestBed } from '@angular/core/testing';

import { ListarFederacionesService } from './listar-federaciones.service';

describe('ListarFederacionesService', () => {
  let service: ListarFederacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarFederacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
