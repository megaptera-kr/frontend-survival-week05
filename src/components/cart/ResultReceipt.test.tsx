import { render, screen, act } from '@testing-library/react';
import receipt from '../../../fixtures/receipt';
import orderInitialValue from '../../utils/orderInitialValue';
import ResultReceipt from './ResultReceipt';

const context = describe;

describe('ResultReceipt', () => {
  jest.useFakeTimers();

  function setLocalStorage<T>(id:string, data:T) {
    window.localStorage.setItem(id, JSON.stringify(data));
  }

  beforeEach(() => {
    setLocalStorage('receipt', orderInitialValue);

    jest.clearAllMocks();
  });

  function renderResultReceipt() {
    render(<ResultReceipt />);
  }

  context('receipt.id가 빈스트링 일때', () => {
    it('"영수증 나오는 곳"이라는 문구가 랜더링 된다.', () => {
      renderResultReceipt();

      expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
    });
  });

  context('receipt.id에 주문아이디가 있을 때', () => {
    it('영수증이 랜더링 된다.', () => {
      setLocalStorage('receipt', receipt);

      renderResultReceipt();

      expect(screen.getByText('영수증')).toBeInTheDocument();
      expect(screen.getByText('주문번호')).toBeInTheDocument();
      expect(screen.getByText('주문메뉴')).toBeInTheDocument();
      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
      expect(screen.getByText(/13,000원/)).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
    });
  });
});
