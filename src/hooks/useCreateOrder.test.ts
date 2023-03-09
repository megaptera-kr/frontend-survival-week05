import fixtures from '../fixtures';
import Food from '../types/Food';
import useCreateOrder from './useCreateOrder';

jest.mock('./useCreateOrder', () => () => ({
  createOrder: (menu: Food[], totalPrice: number) => ({
    id: '123',
    menu,
    totalPrice,
  }),
}));

describe('useCreateOrder', () => {
  it('returns createOrder', () => {
    const { createOrder } = useCreateOrder();

    const menu = fixtures.selectedFoods;
    const totalPrice = 7000;

    expect(createOrder(menu, totalPrice)).toStrictEqual({
      id: '123',
      menu: fixtures.selectedFoods,
      totalPrice: 7000,
    });
  });
});
