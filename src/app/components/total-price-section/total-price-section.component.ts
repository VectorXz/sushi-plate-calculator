import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-total-price-section',
  templateUrl: './total-price-section.component.html',
  styleUrls: ['./total-price-section.component.scss']
})
export class TotalPriceSectionComponent {
  @Input() totalPrice: number = 0;
  @Input() totalPlate: number = 0;
  @Input() currency: string = "THB";
  @Output() onReset = new EventEmitter();

  handleResetCounter(): void {
    this.onReset.emit(true);
  }
  
}
