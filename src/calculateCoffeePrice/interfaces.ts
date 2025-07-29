import { CoffeeSize, CreamerType, LIST_OF_CURRENCIES, SweetenerType } from "./types";

export interface OrderOptions {
  currency?: LIST_OF_CURRENCIES; 
}

export interface Coffee {
  size: CoffeeSize;
  creamer: CreamerType;
  sweetener: SweetenerType;
}