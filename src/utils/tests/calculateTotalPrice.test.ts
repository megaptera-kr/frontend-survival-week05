import calculateTotalPrice from '../calculateTotalPrice';

import Food from '../../types/Food';

describe('calculateTotalPrice function', () => {
  it('메뉴를 선택하지 않았다면 0 출력', () => {
    const menu: Food[] = [];
    const totalPrice = calculateTotalPrice(menu);
    expect(totalPrice).toBe(0);
  });

  it('메뉴를 선택했다면 합계 가격 출력', () => {
    const menu = [
      {
        id: '1',
        name: '짜장면',
        price: 8000,
      },
      {
        id: '2',
        name: '짬뽕',
        price: 5000,
      },
    ];
    const totalPrice = calculateTotalPrice(menu);
    expect(totalPrice).toBe(13000);
  });
});
