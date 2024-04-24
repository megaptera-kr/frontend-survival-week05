import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Orders from '.';
import OrdersType from '../../types/Orders';

const context = describe;

describe('Orders 컴포넌트', () => {
  // given
  const orders:OrdersType = {
    menu: [
      { id: '1', name: '짜장면', price: 8000 },
      { id: '2', name: '김밥', price: 5000 }],
    totalPrice: 13000,
  };
  const setReceipt = jest.fn();

  beforeEach(() => {
    setReceipt.mockClear();
  });

  // when
  context('로컬스토리지에 저장된 orders의 menu가 빈 배열이라면', () => {
    beforeEach(() => {
      render(<Orders setReceipt={setReceipt} />);
    });

    // then
    it('"점심 바구니", "합계:0원 주문" 버튼이 렌더링 된다.', () => {
      const orderBtn = screen.getByText(/주문/);
      expect(screen.getByText('점심 바구니')).toBeInTheDocument();
      expect(orderBtn.textContent).toBe('합계:0원 주문');
    });

    it('주문 버튼은 disabled 표시된다.', () => {
      const orderBtn = screen.getByText(/주문/);
      expect(orderBtn).toHaveAttribute('disabled');
    });
  });

  // when
  context('로컬스토리지에 저장된 orders의 menu가 빈 배열이 아니라면', () => {
    beforeEach(() => {
      window.localStorage.setItem('orders', JSON.stringify(orders));
      render(<Orders setReceipt={setReceipt} />);
    });

    // then
    it('orders item list를 렌더링한다.', () => {
      const items = screen.getAllByRole('listitem');
      items.forEach((_, index) => {
        const regExp = new RegExp(`${orders.menu[index].name}`);
        expect(screen.getByText(regExp)).toBeInTheDocument();
      });
    });
  });

  // when
  context('orders item의 "취소"버튼을 클릭하면', () => {
    beforeEach(() => {
      window.localStorage.setItem('orders', JSON.stringify(orders));
      render(<Orders setReceipt={setReceipt} />);
    });

    // then
    it('해당 item은 화면에 렌더링되지 않는다.', () => {
      const cancelBtns = screen.getAllByText('취소');

      fireEvent.click(cancelBtns[0]);
      expect(screen.queryByText(/짜장면/)).toBeNull();
      expect(screen.getByText(/김밥/)).toBeInTheDocument();
    });
  });

  // when
  context('주문 버튼을 클릭했을 때', () => {
    beforeEach(() => {
      window.localStorage.setItem('orders', JSON.stringify(orders));
      render(<Orders setReceipt={setReceipt} />);

      const orderBtn = screen.getByText(/주문/);
      fireEvent.click(orderBtn);
    });

    // then
    it('orders가 초기화된다.', async () => {
      await waitFor(() => {
        const localOrders:OrdersType = JSON.parse(window.localStorage.getItem('orders') ?? '');
        expect(localOrders.menu.length).toBe(0);
        expect(localOrders.totalPrice).toBe(0);
      });
    });

    // then
    it('setReceipt함수가 호출된다.', async () => {
      await waitFor(() => expect(setReceipt).toHaveBeenCalled());
    });
  });
});
