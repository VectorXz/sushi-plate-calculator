import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sushi-Calculator';

  totalPrice = 0;
  currency = "JPY";

  updatePrice(price: number) {
    this.totalPrice = price;
  }
}
