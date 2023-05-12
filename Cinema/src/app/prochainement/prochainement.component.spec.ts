import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainementComponent } from './prochainement.component';

describe('ProchainementComponent', () => {
  let component: ProchainementComponent;
  let fixture: ComponentFixture<ProchainementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProchainementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProchainementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
