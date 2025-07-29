import { CURRENCY_SYMBOL } from './constants';

export class CurrencyNotFound extends Error {
  constructor(currency: string) {
    super(`Invalid currency type: ${currency}. Valid types are: ${Object.keys(CURRENCY_SYMBOL).join(', ')}`);
    this.name = 'CurrencyNotFound';
  }
}
