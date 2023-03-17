import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColorPickerControl } from '@iplab/ngx-color-picker';
import { PriceData } from 'src/app/app.component';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.scss']
})
export class SettingsSectionComponent implements OnInit {

  private _priceData: PriceData[];
  private _originalPriceData: PriceData[];
  @Output() onPriceDataChange = new EventEmitter<PriceData[]>();

  color: string = "#ff0000";
  public compactControl = new ColorPickerControl();

  @Input() set priceData(data: PriceData[]) {
    if(data) {
     this._priceData = data;
    }
  }

  ngOnInit(): void {
    this._originalPriceData = this.priceData
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

  savePriceData() {
    this.priceData = this.priceData.filter(o => !!o.price && !!o.color)
    this.onPriceDataChange.emit(this.priceData)
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
  }

  handleOnChangecolor(colorHex: string, index: number) {
    this.priceData[index].color = colorHex;
  }
  
}
