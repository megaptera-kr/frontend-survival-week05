import useFetchFoods from '../../hooks/__mocks__/useFetchFoods';
import cartTotalPrice from './cartTotalPrice';

const context = describe;

describe('cartTotalPrice ', () => {
  let price = 0;

  beforeEach(() => {
    price = 0;
  });
  context('cart data check', () => {
    it('menu does not have value', () => {
      price = cartTotalPrice([]);
      expect(price).toBe(0);
    });
    it('menu has values', () => {
      price = cartTotalPrice(useFetchFoods());
      expect(price).toBe(13000);
    });
  });
});
