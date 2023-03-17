import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlateLog } from 'src/app/app.interface';

@Component({
  selector: 'app-total-price-section',
  templateUrl: './total-price-section.component.html',
  styleUrls: ['./total-price-section.component.scss']
})
export class TotalPriceSectionComponent {
  @Input() isIncludeServiceCharge: boolean;
  @Input() isIncludeVat: boolean;
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
    let rawSum = this.plateLogData.reduce((acc, current) => acc + (Number(current.price) * current.amount), 0)
    if(this.isIncludeServiceCharge) {
      rawSum = rawSum + (rawSum * 0.1)
    }
    if(this.isIncludeVat) {
      rawSum = rawSum + (rawSum * 0.07)
    }
    return rawSum;
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
