import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-color-button',
  templateUrl: './select-color-button.component.html',
  styleUrls: ['./select-color-button.component.scss']
})
export class SelectColorButtonComponent {
  @ViewChild('ulList') ulList: ElementRef;

  @Input() selectedColor: string;
  @Output() onChangeColor: EventEmitter<string> = new EventEmitter();

  allColors: {color: string; hex: string}[] = [
    {
      color: "Red",
      hex: "#B71C1C"
    },
    {
      color: "Silver",
      hex: "#E5E5E5"
    },
    {
      color: "Yellow",
      hex: "#F2BA29"
    },
    {
      color: "Black",
      hex: "#17171C"
    },
    {
      color: "Green",
      hex: "#BFDB38"
    },
    {
      color: "Dark Green",
      hex: "#367E18"
    },
    {
      color: "Orange",
      hex: "#FC7300"
    },
    {
      color: "Blue",
      hex: "#7DE5ED"
    },
    {
      color: "Pink",
      hex: "#FFABE1"
    },
    {
      color: "Purple",
      hex: "#937DC2"
    },
  ];

  changeColor(color: string) {
    this.ulList.nativeElement.blur();
    this.onChangeColor.emit(color);
  }

  isActive(hex: string) {
    return hex === this.selectedColor;
  }
}
