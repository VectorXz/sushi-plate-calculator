import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateButtonSectionComponent } from './plate-button-section.component';

describe('PlateButtonSectionComponent', () => {
  let component: PlateButtonSectionComponent;
  let fixture: ComponentFixture<PlateButtonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateButtonSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
