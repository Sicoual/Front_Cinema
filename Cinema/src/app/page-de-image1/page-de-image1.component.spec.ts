import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeImage1Component } from './page-de-image1.component';

describe('PageDeImage1Component', () => {
  let component: PageDeImage1Component;
  let fixture: ComponentFixture<PageDeImage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeImage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeImage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
