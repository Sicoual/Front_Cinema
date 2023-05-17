import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerReservationComponent } from './imprimer-reservation.component';

describe('ImprimerReservationComponent', () => {
  let component: ImprimerReservationComponent;
  let fixture: ComponentFixture<ImprimerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimerReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprimerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
