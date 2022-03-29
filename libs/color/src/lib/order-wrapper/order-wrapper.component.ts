import { Component, ContentChild } from '@angular/core';
import { ORDER_ACTION, OrderAction } from '../config';

@Component({
  selector: 'shared-order-wrapper',
  templateUrl: './order-wrapper.component.html',
})
export class OrderWrapperComponent {
  // We tell our wrapper component that the projected component follows the interface ORDER_ACTION
  @ContentChild(ORDER_ACTION, { static: true })
  orderAction!: OrderAction;

  public requestAvailability() {
    this.orderAction.requestAvailability();
  }
}
