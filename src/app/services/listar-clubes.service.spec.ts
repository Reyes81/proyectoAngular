import { TestBed } from '@angular/core/testing';

import { ListarClubesService } from './listar-clubes.service';

describe('ListarClubesService', () => {
  let service: ListarClubesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarClubesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
