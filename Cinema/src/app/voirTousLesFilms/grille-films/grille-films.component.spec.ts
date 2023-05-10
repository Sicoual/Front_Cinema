import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleFilmsComponent } from './grille-films.component';

describe('GrilleFilmsComponent', () => {
  let component: GrilleFilmsComponent;
  let fixture: ComponentFixture<GrilleFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrilleFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrilleFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
