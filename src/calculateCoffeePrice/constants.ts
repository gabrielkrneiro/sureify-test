import { CoffeeSize, CreamerType, SweetenerType } from './types';

export const CURRENCY_SYMBOL = {
  USD: '$',
};

export const SIZE_PRICES: Record<CoffeeSize, number> = {
  small: 1.0,
  medium: 1.5,
  large: 2.0,
};

export const CREAMER_PRICES: Record<CreamerType, number> = {
  none: 0.0,
  dairy: 0.25,
  'non-dairy': 0.5,
};

export const SWEETENER_PRICES: Record<SweetenerType, number> = {
  none: 0.0,
  sugar: 0.2,
  'sugar alternative': 0.5,
};
