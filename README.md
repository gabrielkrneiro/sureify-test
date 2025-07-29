# Coffee Price Calculator

[![Coffee Price Calculator](https://github.com/gabrielkrneiro/sureify-test/actions/workflows/codeql.yml/badge.svg)](https://github.com/gabrielkrneiro/sureify-test/actions/workflows/codeql.yml)
[![Coverage Status](https://gabrielkrneiro.github.io/sureify-test/badges/badges.svg)](https://gabrielkrneiro.github.io/sureify-test/badges/badges.svg)

A TypeScript project for calculating the price of coffee orders with customizable options such as size, creamer, sweetener, and currency formatting.

## Features

- Calculate coffee prices based on size, creamer, and sweetener selections
- Format prices in different currencies
- Strongly typed with TypeScript
- 100% unit test coverage with Jest
- Prettier and ESLint integration for code quality

## Project Structure

```
src/
  index.ts
  calculateCoffeePrice/
    calculateCoffePrice.ts
    constants.ts
    errors.ts
    helpers.ts
    index.ts
    interfaces.ts
    ...
tests/
coverage/
  lcov-report/
    ...
```

## Getting Started

### Prerequisites

- Node.js >= 16
- npm

### Installation

```sh
npm install
```

### Running the Calculator

You can use the calculator functions in your TypeScript code by importing the main function:

```ts
import calculateCoffeePrice from './src/calculateCoffeePrice';

const price = calculateCoffeePrice({
  size: 'medium',
  creamer: 'dairy',
  sweetener: 'sugar',
});

console.log(price); // e.g., $1.95
```

You have the option to choose a different currency. Although it has to be registered in `CURRENCY_SYMBOL` located in `src/calculateCoffeePrice/constants.ts`

### Running Tests

```sh
npm test
```

### Checking Coverage

```sh
npm run test:coverage
```

Coverage reports will be available in the `coverage/` directory.

### Formatting and Linting

```sh
npm run prettier
npm run lint
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

ISC
