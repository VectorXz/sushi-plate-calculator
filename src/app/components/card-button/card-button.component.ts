import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  @Input() price: string = "0";
  @Input() bgColor: string = "#ffffff";
  @Input() addPrice: Function;
  @Input() currency: string;
  @Output() onButtonClick = new EventEmitter<number>();

  handleButtonClick = (price: string) => {
    this.onButtonClick.emit(Number(price));
  }
}
