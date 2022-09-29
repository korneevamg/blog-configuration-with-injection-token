import {
  COLOR_CONFIG_TOKEN,
  ColorConfig,
  InfoTagModule,
} from '@blog-configuration-with-injection-token/color';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

export const APP_CONFIG: ColorConfig = {
  productColor: 'red',
  productGeneralConditions: 'www.red-products.com',
  price: 3.5,
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfoTagModule],
  providers: [{ provide: COLOR_CONFIG_TOKEN, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
