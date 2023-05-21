import fixtures from '../../fixtures';

import calcTotalPrice from './calcTotalPrice';

const context = describe;

describe('calcTotalPrice', () => {
  context('input foods(cart items)', () => {
    it('return sum of foods price', () => {
      const totalPrice = calcTotalPrice(fixtures.foods);

      expect(totalPrice).toBe(13000);
    });
  });
});
