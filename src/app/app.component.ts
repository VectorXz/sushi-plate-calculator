import { Component } from '@angular/core';

export interface PriceData {
  price: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sushi-Calculator';

  totalPrice = 0;
  totalPlate = 0;
  currency = 'THB';
  priceData: PriceData[] = [];

  constructor() {
    this.priceData = [
      {
        price: "20",
        color: "#B71C1C"
      },
      {
        price: "60",
        color: "#E5E5E5"
      },
      {
        price: "80",
        color: "#F2BA29"
      },
      {
        price: "120",
        color: "#17171C"
      },
    ]
  }

  handleAddPlate(price: number): void {
    this.totalPrice += price;
    this.totalPlate += 1;
  }

  resetCounter(data: boolean) {
    if (data) {
      this.totalPrice = 0;
      this.totalPlate = 0;
    }
  }

  handlePriceDataChange(newPriceData: PriceData[]) {
    this.priceData = newPriceData;
  }

  handleOnCurrencyChange(currency: string) {
    this.currency = currency;
  }

}
