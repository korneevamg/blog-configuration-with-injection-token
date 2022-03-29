import { Inject, Injectable } from '@angular/core';
//import { Product } from './color.model';
import { ColorConfig, COLOR_CONFIG_TOKEN } from './config';

@Injectable()
export class InfoService {
  public constructor(@Inject(COLOR_CONFIG_TOKEN) private config: ColorConfig) {}

  /* The straigtforward approach 
  public getProductInfo(product: Product) {
    let termsAndConditionsUrl;
    if (product.color === 'red') {
      termsAndConditionsUrl = 'www.red-products.com';
    } else {
      termsAndConditionsUrl = 'www.blue-products.com';
    }
    return `${product.color} product costs ${product.price} EUR. Please visit ${termsAndConditionsUrl} for more information`;
  }*/

  public getProductInfo(price: number) {
    return `${this.config.productColor} product costs ${price} EUR. Please visit ${this.config.productGeneralConditions} for more information`;
    /*     return `${this.config.productColor} product costs ${this.config.getPrice(
      price
    )} EUR. Please visit ${
      this.config.productGeneralConditions
    } for more information`; */
  }
}
