import { Component } from '@angular/core';
import { PlateLog, PriceAndColor, PriceData } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sushi-Calculator';

  currency = 'THB';
  priceData: PriceData[] = [];
  plateLogData: PlateLog[] = [];

  isIncludeServiceCharge = false;
  isIncludeVat = false;

  constructor() {
    this.priceData = [
      {
        price: "40",
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

  handleAddPlate(data: PriceAndColor): void {
    const currentColorData = this.plateLogData.map(i => i.color);
    if(currentColorData.includes(data.color)) {
      //add plate
      const updatedData = this.plateLogData.map(i => {
        if(i.color === data.color) {
          return {
            ...i,
            amount: i.amount+1
          }
        }
        return i;
      })
      this.plateLogData = updatedData;
    } else {
      const temp: PlateLog = {
        price: data.price,
        color: data.color,
        amount: 1
      }
      this.plateLogData.push(temp);
    }
  }

  resetCounter(data: boolean) {
    if (data) {
      this.plateLogData = [];
    }
  }

  handlePriceDataChange(newPriceData: PriceData[]) {
    this.priceData = newPriceData;
  }

  handleOnCurrencyChange(currency: string) {
    this.currency = currency;
  }

  handleDecreaseAmount(color: string) {
    const updatedData = this.plateLogData.map((data) => {
      if(data.color === color) {
        return {
          ...data,
          amount: data.amount-1
        }
      }
      return data;
    })
    .filter((data) => data.amount > 0)
    
    this.plateLogData = updatedData
  }

  handleIncreaseAmount(color: string) {
    const updatedData = this.plateLogData.map((data) => {
      if(data.color === color) {
        return {
          ...data,
          amount: data.amount+1
        }
      }
      return data;
    })
    this.plateLogData = updatedData
  }

  handleToggleServiceCharge() {
    this.isIncludeServiceCharge = !this.isIncludeServiceCharge
  }

  handleToggleVat() {
    this.isIncludeVat = !this.isIncludeVat
  }

}
