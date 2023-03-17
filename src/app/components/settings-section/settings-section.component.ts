import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColorPickerControl } from '@iplab/ngx-color-picker';
import { PriceData } from 'src/app/app.component';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.scss']
})
export class SettingsSectionComponent implements OnInit {

  allCurrency: string[] = [
    "THB",
    "JPY",
    "KRW",
    "TWD",
    "HKD",
    "SGD",
    "CNY",
    "GBP",
    "USD",
  ]

  private _currency: string;
  @Input() set currency(data: string) {
    if(data) {
      this._currency = data;
    }
  }
  get currency() {
    return this._currency;
  }
  private _originalCurrency: string;
  private _priceData: PriceData[];
  private _originalPriceData: PriceData[];
  @Output() onPriceDataChange = new EventEmitter<PriceData[]>();
  @Output() onCurrencyChange = new EventEmitter<string>();
  @ViewChild('currencyList') currencyList: ElementRef;

  color: string = "#ff0000";
  public compactControl = new ColorPickerControl();

  @Input() set priceData(data: PriceData[]) {
    if(data) {
     this._priceData = data;
    }
  }

  ngOnInit(): void {
    this._originalPriceData = this.priceData
    this._originalCurrency = this.currency
  }

  get priceData(): PriceData[] {
    return this._priceData;
  }

  generateHexColor() {
    // generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
    var randomNum = Math.floor(Math.random() * 16777215);
  
    // convert the random number to hexadecimal and pad with zeros to 6 digits
    var hexColor = randomNum.toString(16).padStart(6, '0');
  
    // return the hexadecimal color string
    return '#' + hexColor.toUpperCase();
  }
  

  deletePriceData(index: number) {
    const newPriceData = JSON.parse(JSON.stringify(this.priceData))
    newPriceData.splice(index, 1);
    this.priceData = newPriceData;
  }

  saveSettings() {
    this.priceData = this.priceData.filter(o => !!o.price && !!o.color);
    this.onPriceDataChange.emit(this.priceData);
    this.onCurrencyChange.emit(this.currency);
    this._originalCurrency = this.currency;
  }

  addPrice() {
    this.priceData = [
      ...this.priceData,
      {
        price: "",
        color: this.generateHexColor()
      }
    ]
  }

  resetState() {
    this.priceData = this._originalPriceData;
    this.currency = this._originalCurrency;
  }

  handleOnChangecolor(colorHex: string, index: number) {
    this.priceData[index].color = colorHex;
  }
  
  resetSettings() {
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
    this.currency = "THB"
  }

  changeCurrency(currency: string) {
    this.currencyList.nativeElement.blur();
    this.currency = currency;
  }
}
