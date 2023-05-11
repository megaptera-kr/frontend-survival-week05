import {
  act, fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import foods from '../../../fixtures/foods';
import orderInitialValue from '../../utils/orderInitialValue';
import LunchCart from './LunchCart';

const context = describe;

describe('LunchCart', () => {
  jest.useFakeTimers();

  function setLocalStorage<T>(id:string, data:T) {
    window.localStorage.setItem(id, JSON.stringify(data));
  }

  beforeEach(() => {
    setLocalStorage('cart', []);
    setLocalStorage('receipt', orderInitialValue);

    jest.clearAllMocks();
  });
  function renderLunchCart() {
    render(<LunchCart />);
  }
  context('선택된 메뉴가 없을 때', () => {
    it('점심 바구니가 비어있고, 주문 버튼 문구는 "합계: 0원 주문", 영수증 나오는 곳이 렌더링 된다.', () => {
      renderLunchCart();

      expect(screen.getByText('점심 바구니')).toBeInTheDocument();
      expect(screen.getByText(/0원/)).toBeInTheDocument();
      expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
    });
  });
  context('선택된 메뉴가 있을 때', () => {
    it('점심 바구니에 메뉴가 추가되고 합계가 변경된다.', () => {
      setLocalStorage('cart', foods);
      renderLunchCart();

      expect(screen.getByText('짜장면(8,000원)')).toBeInTheDocument();
      expect(screen.getByText('짬뽕(5,000원)')).toBeInTheDocument();
      expect(screen.getByText(/13,000원/)).toBeInTheDocument();
    });
    it('주문 버튼을 클릭하면 점심바구니가 주문 금액이 0원이 된다.', async () => {
      setLocalStorage('cart', foods);
      renderLunchCart();

      const orderButton = screen.getByTestId('orderSubmit');
      fireEvent.click(orderButton);

      expect(screen.getByText(/0원/)).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByText('영수증')).toBeInTheDocument();
        expect(screen.getByText('주문번호')).toBeInTheDocument();
        expect(screen.getByText('주문메뉴')).toBeInTheDocument();
        expect(screen.getByText(/짜장면/)).toBeInTheDocument();
        expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
        expect(screen.getByText(/13,000원/)).toBeInTheDocument();
      });

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
    });
  });
});
