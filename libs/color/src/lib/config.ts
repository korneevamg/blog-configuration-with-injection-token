import { InjectionToken } from '@angular/core';

export const COLOR_CONFIG_TOKEN = new InjectionToken<ColorConfig>('config');

export interface ColorConfig {
  productColor: string;
  productGeneralConditions: string;
  getPrice(category: number): number;
}

export const ORDER_ACTION = new InjectionToken<OrderAction>('OrderAction');

export interface OrderAction {
  requestAvailability: () => void;
}
