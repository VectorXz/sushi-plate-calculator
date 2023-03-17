import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceData } from 'src/app/app.component';

@Component({
  selector: 'app-plate-button-section',
  templateUrl: './plate-button-section.component.html',
  styleUrls: ['./plate-button-section.component.scss']
})
export class PlateButtonSectionComponent {

  @Input() currency: string = "THB";
  @Input() priceData: PriceData[];
  totalPrice: number = 0;
  @Output() onAddPlate = new EventEmitter<number>();

  handleButtonClick = (price: number) => {
    this.onAddPlate.emit(price);
  }

}
