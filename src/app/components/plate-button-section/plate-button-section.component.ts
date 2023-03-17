import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceAndColor, PriceData } from 'src/app/app.interface';

@Component({
  selector: 'app-plate-button-section',
  templateUrl: './plate-button-section.component.html',
  styleUrls: ['./plate-button-section.component.scss'],
})
export class PlateButtonSectionComponent {
  @Input() currency: string = 'THB';
  @Input() priceData: PriceData[];
  totalPrice: number = 0;
  @Output() onAddPlate = new EventEmitter<PriceAndColor>();

  handleButtonClick = (data: PriceAndColor) => {
    this.onAddPlate.emit(data);
  };
}
