import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiSeancesComponent } from './regi-seances.component';

describe('RegiSeancesComponent', () => {
  let component: RegiSeancesComponent;
  let fixture: ComponentFixture<RegiSeancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiSeancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
