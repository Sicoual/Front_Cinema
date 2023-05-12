import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselAfficheComponent } from './carrousel-affiche.component';

describe('CarrouselAfficheComponent', () => {
  let component: CarrouselAfficheComponent;
  let fixture: ComponentFixture<CarrouselAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselAfficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
