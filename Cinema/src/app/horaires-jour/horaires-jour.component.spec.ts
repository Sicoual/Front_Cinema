import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesJourComponent } from './horaires-jour.component';

describe('HorairesJourComponent', () => {
  let component: HorairesJourComponent;
  let fixture: ComponentFixture<HorairesJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorairesJourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorairesJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
