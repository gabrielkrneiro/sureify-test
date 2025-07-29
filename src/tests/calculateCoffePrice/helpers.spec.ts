import { CURRENCY_SYMBOL } from "../../calculateCoffeePrice/constants";
import { CurrencyNotFound } from "../../calculateCoffeePrice/errors";
import { formatPrice, getCurrencySymbol } from "../../calculateCoffeePrice/helpers";
import { LIST_OF_CURRENCIES } from "../../calculateCoffeePrice/types";

describe('getCurrencySymbol', () => {
    it('should return the correct symbol for valid currencies', () => {
        // Assuming CURRENCY_SYMBOL has at least USD and EUR for demonstration
        (Object.keys(CURRENCY_SYMBOL) as LIST_OF_CURRENCIES[]).forEach((currency) => {
            expect(getCurrencySymbol(currency)).toBe(CURRENCY_SYMBOL[currency]);
        });
    });

    it('should throw an error for invalid currency', () => {
        expect(() => getCurrencySymbol('INVALID')).toThrow(new CurrencyNotFound('INVALID'));
    });
});

describe('formatPrice', () => {
    it('should format price with default USD currency', () => {
        expect(formatPrice(10)).toBe(`${CURRENCY_SYMBOL['USD']}10.00`);
    });

    it('should format price with two decimal places', () => {
        expect(formatPrice(3.1)).toMatch(/\d+\.\d{2}$/);
    });
});