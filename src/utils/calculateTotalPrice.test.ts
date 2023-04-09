import Food from '../types/Food';
import calculateTotalPrice from './calculateTotalPrice';

describe('calculateTotalPrice', () => {
  it('get total price', () => {
    const food: Food[] = [
      {
        id: '0',
        name: 'testfood1',
        price: 1000,
      },
      {
        id: '1',
        name: 'testfood2',
        price: 1000,
      },
    ];

    expect(calculateTotalPrice(food)).toBe(2000);
  });
});
