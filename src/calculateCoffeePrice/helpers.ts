
import { CURRENCY_SYMBOL } from "./constants";
import { CurrencyNotFound } from "./errors";
import { LIST_OF_CURRENCIES } from "./types";

export function getCurrencySymbol(currency: string): string {
    if (!(currency in CURRENCY_SYMBOL)) {
        throw new CurrencyNotFound(currency);
    }   
    return CURRENCY_SYMBOL[currency as LIST_OF_CURRENCIES];
}

export const formatPrice = (price: number, options?: { currency: LIST_OF_CURRENCIES }): string => {
  const { currency = 'USD' } = options || {};
  
  return `${getCurrencySymbol(currency)}${price.toFixed(2)}`;
}