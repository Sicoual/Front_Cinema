import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:Cinema/src/app/voirTousLesFilms/grille-films/grille-films.component.spec.ts
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
========
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
>>>>>>>> dev:Cinema/src/app/footer/footer.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
