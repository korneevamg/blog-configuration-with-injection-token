import {
  COLOR_CONFIG_TOKEN,
  ColorConfig,
  InfoTagModule,
} from '@blog-configuration-with-injection-token/color';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RedOrderActionComponent } from './order-action/order-action.component';

const getBluePrice = (price: number) => 1.5 * price;

export const APP_CONFIG: ColorConfig = {
  productColor: 'red',
  productGeneralConditions: 'www.red-products.com',
  getPrice: getBluePrice,
};

@NgModule({
  declarations: [AppComponent, RedOrderActionComponent],
  imports: [BrowserModule, InfoTagModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
