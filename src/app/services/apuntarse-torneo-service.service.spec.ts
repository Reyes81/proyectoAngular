import { TestBed } from '@angular/core/testing';

import { ApuntarseTorneoService } from './apuntarse-torneo-service.service';

describe('ApuntarseTorneoServiceService', () => {
  let service: ApuntarseTorneoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuntarseTorneoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
