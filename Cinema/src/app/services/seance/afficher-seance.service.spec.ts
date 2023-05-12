import { TestBed } from '@angular/core/testing';

import { AfficherSeanceService } from '../../services/seance/afficher-seance.service';

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
