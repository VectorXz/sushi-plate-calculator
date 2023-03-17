import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlateLog } from 'src/app/app.interface';

@Component({
  selector: 'app-total-price-section',
  templateUrl: './total-price-section.component.html',
  styleUrls: ['./total-price-section.component.scss']
})
export class TotalPriceSectionComponent {
  @Input() totalPrice: number = 0;
  @Input() totalPlate: number = 0;
  @Input() currency: string = "THB";
  @Input() plateLogData: PlateLog[];
  @Output() onReset = new EventEmitter();
  @Output() onDecreaseAmount = new EventEmitter();
  @Output() onIncreaseAmount = new EventEmitter();

  handleResetCounter(): void {
    this.onReset.emit(true);
  }

  decreaseAmount(color: string) {
    this.onDecreaseAmount.emit(color);
  }

  increaseAmount(color: string) {
    this.onIncreaseAmount.emit(color);
  }

  calculateTotalPrice() {
    return this.plateLogData.reduce((acc, current) => acc + (Number(current.price) * current.amount), 0)
  }

  calculateTotalPlate() {
    return this.plateLogData.reduce((acc, current) => acc + current.amount, 0)
  }
  
  calculatePlateText() {
    if(this.calculateTotalPlate() > 1) {
      return "plates"
    } else {
      return "plate"
    }
  }
}
