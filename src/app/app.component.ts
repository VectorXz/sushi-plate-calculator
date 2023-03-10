import { Component } from '@angular/core';

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
}
