import { CURRENCY_SYMBOL } from "./constants";

export type CoffeeSize = 'small' | 'medium' | 'large';
export type CreamerType = 'none' | 'dairy' | 'non-dairy';
export type SweetenerType = 'none' | 'sugar' | 'sugar alternative';

export type LIST_OF_CURRENCIES = keyof typeof CURRENCY_SYMBOL
