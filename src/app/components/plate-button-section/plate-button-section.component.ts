import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plate-button-section',
  templateUrl: './plate-button-section.component.html',
  styleUrls: ['./plate-button-section.component.scss']
})
export class PlateButtonSectionComponent {

  @Input() currency: string = "THB";
  totalPrice: number = 0;

  @Output() onPriceChange = new EventEmitter<number>();

  addPrice = (price: number): void => {
    this.totalPrice += Number(price);
    this.onPriceChange.emit(this.totalPrice);
  }
}
