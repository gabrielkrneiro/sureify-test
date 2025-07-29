import { CREAMER_PRICES, SIZE_PRICES, SWEETENER_PRICES } from "./constants";
import { formatPrice } from "./helpers";
import { CoffeeOptions } from "./interfaces";

/**
 * Calculates the total price of a coffee based on size, creamer, and sweetener.
 * @param options CoffeeOptions object
 * @returns A formatted string like "$2.50"
 */
export default function calculateCoffeePrice(options: CoffeeOptions): string {
  const sizePrice = SIZE_PRICES[options.size];
  const creamerPrice = CREAMER_PRICES[options.creamer];
  const sweetenerPrice = SWEETENER_PRICES[options.sweetener];

  const total = sizePrice + creamerPrice + sweetenerPrice;

  return formatPrice(total);
}
