import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
import { TotalPriceSectionComponent } from './components/total-price-section/total-price-section.component';
import { PlateButtonSectionComponent } from './components/plate-button-section/plate-button-section.component';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { SettingsSectionComponent } from './components/settings-section/settings-section.component';
import { SelectColorButtonComponent } from './components/select-color-button/select-color-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingSectionComponent,
    TotalPriceSectionComponent,
    PlateButtonSectionComponent,
    CardButtonComponent,
    SettingsSectionComponent,
    SelectColorButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
