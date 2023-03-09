import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceSectionComponent } from './total-price-section.component';

describe('TotalPriceSectionComponent', () => {
  let component: TotalPriceSectionComponent;
  let fixture: ComponentFixture<TotalPriceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPriceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPriceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
