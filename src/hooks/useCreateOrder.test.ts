import fixtures from '../../fixtures';

import Food from '../types/Food';

import useCreateOrder from './useCreateOrder';

jest.mock('./useCreateOrder', () => () => {
  const createOrder = (food: Food[], totalPrice: number) => ({
    id: new Date().toString(),
    menu: food,
    totalPrice,
  });

  return { createOrder };
});

describe('useCreateOrder', () => {
  it('영수증 발행', () => {
    const { createOrder } = useCreateOrder();

    const receipt = createOrder(fixtures.restaurants[0].menu, 39000);

    expect(receipt).toMatchObject({
      menu: fixtures.restaurants[0].menu,
      totalPrice: 39000,
    });
  });
});
