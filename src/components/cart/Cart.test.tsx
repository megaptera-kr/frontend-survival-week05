import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Cart from './Cart';
import '../../../tests/localStorage';

const context = describe;

describe('Cart', () => {
  const mockCarts = [
    {
      id: 'FOOD_01-ASD',
      name: '짜장면',
      price: 8_000,
    },
    {
      id: 'FOOD_01-QWE',
      name: '짜장면',
      price: 8_000,
    },
    {
      id: 'FOOD_02',
      name: '짬뽕',
      price: 5_000,
    },
  ];

  function setLocalStorage<T>(id:string, data:T) {
    window.localStorage.setItem(id, JSON.stringify(data));
  }

  beforeEach(() => {
    setLocalStorage('cart', mockCarts);
  });

  function renderCart() {
    render(<Cart />);
  }
  context('로컬스토리지 카트에 3개의 메뉴가 추가되었을 때', () => {
    it('메뉴와 가격, 취소버튼이 총 3개 렌더링 된다', () => {
      renderCart();

      const menu = screen.getAllByText('짜장면(8,000원)');
      const menu3 = screen.getAllByText('짬뽕(5,000원)');
      const cancelButtons = screen.getAllByText('취소');

      expect(menu).toHaveLength(2);
      expect(menu3).toHaveLength(1);
      expect(cancelButtons.length).toEqual(mockCarts.length);
    });
  });

  context('사용자가 첫번째 메뉴를 취소했을 때', () => {
    it('짜장면 메뉴는 한개만 렌더링 된다.', async () => {
      renderCart();

      const cancelButton = screen.getByTestId('#0');

      fireEvent.click(cancelButton);

      await waitFor(() => {
        const menu = screen.getAllByText('짜장면(8,000원)');
        expect(menu).toHaveLength(1);
      });
    });
  });
});
