import calculateCoffeePrice from '../../calculateCoffeePrice';

describe('calculateCoffeePrice', () => {
  it('should export calculateCoffeePrice', () => {
    expect(calculateCoffeePrice).toBeDefined();
  });

  it('should return $1.95 for coffee with dairy creamer, medium size and sugar sweetener', () => {
    const results = calculateCoffeePrice({
      creamer: 'dairy',
      size: 'medium',
      sweetener: 'sugar',
    });

    expect(results).toBe('$1.95');
  });
});
