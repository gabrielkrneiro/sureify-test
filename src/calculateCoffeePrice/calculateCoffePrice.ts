import { CREAMER_PRICES, SIZE_PRICES, SWEETENER_PRICES } from "./constants";
import { formatPrice } from "./helpers";
import { Coffee, OrderOptions } from "./interfaces";

/**
 * Calculates the total price of a coffee based on size, creamer, and sweetener.
 * @param options CoffeeOptions object
 * @returns A formatted string like "$2.50"
 */
export default function calculateCoffeePrice(coffee: Coffee, options?: OrderOptions): string {
  const sizePrice = SIZE_PRICES[coffee.size];
  const creamerPrice = CREAMER_PRICES[coffee.creamer];
  const sweetenerPrice = SWEETENER_PRICES[coffee.sweetener];

  const total = sizePrice + creamerPrice + sweetenerPrice;

  return formatPrice(total, options);
}
