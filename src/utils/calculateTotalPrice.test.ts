import foods from '../../fixtures/foods';
import calculateTotalPrice from './calculateTotalPrice';

const context = describe;

describe('calculate total price', () => {
  context('with Menu type Array', () => {
    it('returns sum of numbers', () => {
      expect(calculateTotalPrice(foods)).toBe(13000);
    });
  });
});
