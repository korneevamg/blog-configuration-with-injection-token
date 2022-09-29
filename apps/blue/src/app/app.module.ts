import {
  COLOR_CONFIG_TOKEN,
  ColorConfig,
  InfoTagModule,
} from '@blog-configuration-with-injection-token/color';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

const getBluePrice = (price: number) => 0.95 * price;

export const APP_CONFIG: ColorConfig = {
  productColor: 'blue',
  productGeneralConditions: 'www.blue-products.com',
  getPrice: getBluePrice,
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfoTagModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
