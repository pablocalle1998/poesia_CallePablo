import { TestBed } from '@angular/core/testing';

import { poesiasService } from './poesia.service';

describe('poesiasService', () => {
  let service: poesiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(poesiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
