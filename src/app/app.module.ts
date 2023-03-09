import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
import { TotalPriceSectionComponent } from './components/total-price-section/total-price-section.component';
import { PlateButtonSectionComponent } from './components/plate-button-section/plate-button-section.component';
import { CardButtonComponent } from './components/card-button/card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingSectionComponent,
    TotalPriceSectionComponent,
    PlateButtonSectionComponent,
    CardButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
