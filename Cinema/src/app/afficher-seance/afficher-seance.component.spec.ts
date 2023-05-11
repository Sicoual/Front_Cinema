import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSeanceComponent } from './afficher-seance.component';

describe('AfficherSeanceComponent', () => {
  let component: AfficherSeanceComponent;
  let fixture: ComponentFixture<AfficherSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherSeanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
