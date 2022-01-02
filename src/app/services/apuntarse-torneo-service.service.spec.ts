import { TestBed } from '@angular/core/testing';

import { ApuntarseTorneoServiceService } from './apuntarse-torneo-service.service';

describe('ApuntarseTorneoServiceService', () => {
  let service: ApuntarseTorneoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuntarseTorneoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
