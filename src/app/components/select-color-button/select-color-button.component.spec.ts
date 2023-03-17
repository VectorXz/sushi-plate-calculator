import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectColorButtonComponent } from './select-color-button.component';

describe('SelectColorButtonComponent', () => {
  let component: SelectColorButtonComponent;
  let fixture: ComponentFixture<SelectColorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectColorButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectColorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
