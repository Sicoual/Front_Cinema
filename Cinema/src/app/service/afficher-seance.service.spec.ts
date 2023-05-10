import { TestBed } from '@angular/core/testing';

import { AfficherSeanceService } from './afficher-seance.service';

describe('AfficherSeanceService', () => {
  let service: AfficherSeanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherSeanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
