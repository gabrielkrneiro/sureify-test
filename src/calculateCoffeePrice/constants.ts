import { CoffeeSize, CreamerType, SweetenerType } from "./types";

export const CURRENCY_SYMBOL = {
  USD: '$',
}

export const SIZE_PRICES: Record<CoffeeSize, number> = {
  small: 1.00,
  medium: 1.50,
  large: 2.00
};

export const CREAMER_PRICES: Record<CreamerType, number> = {
  none: 0.00,
  dairy: 0.25,
  'non-dairy': 0.50
};

export const SWEETENER_PRICES: Record<SweetenerType, number> = {
  none: 0.00,
  sugar: 0.20,
  'sugar alternative': 0.50
};