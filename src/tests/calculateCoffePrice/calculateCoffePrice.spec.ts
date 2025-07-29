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

  it('should return $1.00 for coffee without any dairy, small size and no sugar', () => {
    const results = calculateCoffeePrice({
      creamer: 'none',
      size: 'small',
      sweetener: 'none',
    });

    expect(results).toBe('$1.00');
  });

  it('should return $3.00 for coffee with non-dairy, large size and alternative sugar', () => {
    const results = calculateCoffeePrice({
      creamer: 'non-dairy',
      size: 'large',
      sweetener: 'sugar alternative',
    });

    expect(results).toBe('$3.00');
  });
});
