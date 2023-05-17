import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisseurComponent } from './regisseur.component';

describe('RegisseurComponent', () => {
  let component: RegisseurComponent;
  let fixture: ComponentFixture<RegisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
