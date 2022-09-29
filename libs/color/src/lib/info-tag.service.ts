import { inject, Injectable } from '@angular/core';
import { ColorConfig, COLOR_CONFIG_TOKEN } from './config';

@Injectable()
export class InfoService {
  public config: ColorConfig;
  public constructor() {
    this.config = inject(COLOR_CONFIG_TOKEN);
  }

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

  public getProductInfo() {
    return `${this.config.productColor} product costs ${this.config.price} EUR. Please visit ${this.config.productGeneralConditions} for more information`;
  }
}
