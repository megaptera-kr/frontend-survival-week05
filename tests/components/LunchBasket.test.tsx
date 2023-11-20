import { fireEvent, render, screen } from '@testing-library/react';

import LunchBasket from '../../src/components/FoodKioskApp/components/LunchBasket';

const deleteMenu = jest.fn();
const orderMenus = jest.fn();

const addedMenus = [
  {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8000,
  },
  {
    id: 'FOOD_02',
    name: '짬뽕',
    price: 5000,
  },
  {
    id: 'FOOD_03',
    name: '김밥',
    price: 3000,
  },
  {
    id: 'FOOD_04',
    name: '카레',
    price: 10000,
  },
];

jest.mock(
  '../../src/components/FoodKioskApp/hooks/useLaunchBasketHandler',
  () => () => ({
    addedMenus,
    totalPrice: addedMenus.reduce((acc, cur) => acc + (cur.price || 0), 0),
    deleteMenu,
    orderMenus,
  }),
);

describe('LunchBasket', () => {
  it('renders LunchBasket', async () => {
    render(<LunchBasket title="점심 바구니" />);

    screen.getByText('점심 바구니');

    if (addedMenus.length > 0) {
      addedMenus.forEach((menu) => {
        screen.getByText(`${menu.name}(${menu.price.toLocaleString()}원)`);
      });

      const totalPrice = addedMenus.reduce((acc, cur) => acc + cur.price, 0);
      screen.getByText(`합계: ${totalPrice.toLocaleString()}원 주문`);
    } else {
      screen.getByText('선택된 메뉴가 없습니다.');
    }
  });
});

describe('LunchBasket Menu deleteButton Click Event', () => {
  beforeEach(() => {
    deleteMenu.mockClear();
  });

  it('calls deleteMenu when a delete button is clicked', () => {
    render(<LunchBasket title="점심 바구니" />);

    if (addedMenus.length > 0) {
      const deleteButtons = screen.getAllByText('취소');
      deleteButtons.forEach((button, idx) => {
        fireEvent.click(button);
        expect(deleteMenu).toHaveBeenCalledWith(idx);
      });
    }
  });
});

describe('LunchBasket Menu orderButton Click Event', () => {
  beforeEach(() => {
    orderMenus.mockClear();
  });

  it('calls orderMenus when the order button is clicked', () => {
    render(<LunchBasket title="점심 바구니" />);

    if (addedMenus.length > 0) {
      const orderButton = document.getElementsByClassName('cta-button')[0];
      fireEvent.click(orderButton);
      expect(orderMenus).toHaveBeenCalled();
    }
  });
});
