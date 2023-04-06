import fixtures from '../fixtures';
import Food from '../types/Food';

import useCreateOrder from './useCreateOrder';

jest.mock('./useCreateOrder', () => () => {
  const createOrder = (food: Food, totalPrice: number) => ({
    id: 1242921492149,
    menu: food,
    totalPrice,
  });

  return { createOrder };
});

describe('useCreateOrder', () => {
  it('get receipt when call createOrder function', () => {
    const { createOrder } = useCreateOrder();

    const receipt = createOrder(fixtures.restaurants[0].menu, 1000);

    expect(receipt).toMatchObject({
      menu: fixtures.restaurants[0].menu,
      totalPrice: 1000,
    });
  });
});
