import {
  ORDER_ACTION,
  OrderAction,
} from '@blog-configuration-with-injection-token/color';

import { Component } from '@angular/core';

@Component({
  selector: 'red-order-action',
  templateUrl: './order-action.component.html',
  providers: [
    {
      provide: ORDER_ACTION,
      useExisting: RedOrderActionComponent,
    },
  ],
})
export class RedOrderActionComponent implements OrderAction {
  public availabilityDetails = '';
  public requestAvailability = () => {
    this.availabilityDetails = '3 articles left in stock.';
  };
}
