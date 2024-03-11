import { render, screen, fireEvent, act } from '@testing-library/react';
import OrderButtonInCart from './OrderButtonInCart';

import createOrder from '../api/order.api';

import fixtures from '../../fixtures';

const context = describe;

jest.mock('../api/order.api');

describe('OrderButtonInCart 컴포넌트 테스트', () => {
  context('컴포넌트 렌더링', () => {
    it('주문 메뉴가 없을 때', () => {
      render(<OrderButtonInCart menuItems={[]} />);
      screen.getByText(/합계: 0원 주문/);
    });

    it('주문 메뉴가 있을 때', () => {
      const { foods } = fixtures;
      render(<OrderButtonInCart menuItems={foods} />);
      screen.getByText(/합계: 13,000원 주문/);
    });
  });

  context('주문 버튼 클릭', () => {
    it('주문 메뉴가 없을 때', () => {
      render(<OrderButtonInCart menuItems={[]} />);
      const button = screen.getByText(/합계/);
      fireEvent.click(button);
      expect(createOrder).not.toHaveBeenCalled();
    });

    it('주문 메뉴가 있을 때', async () => {
      const { foods } = fixtures;
      render(<OrderButtonInCart menuItems={foods} />);
      const button = screen.getByText(/합계/);
      await act(async () => {
        fireEvent.click(button);
      });
      expect(createOrder).toHaveBeenCalled();
    });
  });
});
