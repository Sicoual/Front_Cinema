import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouseldebaseComponent } from './carrouseldebase.component';

describe('CarrouseldebaseComponent', () => {
  let component: CarrouseldebaseComponent;
  let fixture: ComponentFixture<CarrouseldebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouseldebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouseldebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
