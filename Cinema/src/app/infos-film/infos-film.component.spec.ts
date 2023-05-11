import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosFilmComponent } from './infos-film.component';

describe('InfosFilmComponent', () => {
  let component: InfosFilmComponent;
  let fixture: ComponentFixture<InfosFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
