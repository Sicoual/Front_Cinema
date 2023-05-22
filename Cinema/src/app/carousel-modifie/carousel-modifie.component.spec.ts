import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselModifieComponent } from './carousel-modifie.component';

describe('CarouselModifieComponent', () => {
  let component: CarouselModifieComponent;
  let fixture: ComponentFixture<CarouselModifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselModifieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselModifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
