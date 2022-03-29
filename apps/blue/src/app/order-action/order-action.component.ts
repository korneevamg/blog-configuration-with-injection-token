import {
  ORDER_ACTION,
  OrderAction,
} from '@blog-configuration-with-injection-token/color';

import { Component } from '@angular/core';

@Component({
  selector: 'blue-order-action',
  templateUrl: './order-action.component.html',
  providers: [
    {
      provide: ORDER_ACTION,
      useExisting: BlueOrderActionComponent,
    },
  ],
})
export class BlueOrderActionComponent implements OrderAction {
  public availabilityDetails = '';
  public requestAvailability = () => {
    this.availabilityDetails =
      'Out of stock. Please leave your email address and we will inform you once the article is available again. If you wish to preorder anyway, press "Continue"';
  };
}
