import { TestBed } from '@angular/core/testing';

import { PokeappService } from './pokeapp.service';

describe('PokeappService', () => {
  let service: PokeappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
