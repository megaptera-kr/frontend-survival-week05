import { fireEvent, render, screen } from '@testing-library/react';
import foods from '../../../fixtures/foods';
import calculateTotalPrice from '../../utils/calculateTotalPrice';
import OrderButton from './OrderButton';
import orderInitialValue from '../../utils/orderInitialValue';
import receipt from '../../../fixtures/receipt';

const context = describe;

describe('OrderButton', () => {
  function setLocalStorage<T>(id:string, data:T) {
    window.localStorage.setItem(id, JSON.stringify(data));
  }

  let currentTotalPrice = 0;
  const handleOrder = jest.fn();

  beforeEach(() => {
    setLocalStorage('cart', []);
    setLocalStorage('receipt', orderInitialValue);

    jest.clearAllMocks();
  });

  function renderOrderButton(totalPrice: number) {
    render(<OrderButton
      totalPrice={totalPrice}
      handleOrder={handleOrder}
    />);
  }
  context('점심 바구니가 비어있을 때', () => {
    it('버튼의 가격은 0원이다', () => {
      renderOrderButton(currentTotalPrice);

      const buttonText = screen.getByText(/0원/);

      expect(buttonText).toBeInTheDocument();
    });
    it('버튼을 클릭해도 함수가 호출되지 않는다.', () => {
      renderOrderButton(currentTotalPrice);

      const button = screen.getByTestId('orderSubmit');

      fireEvent.click(button);

      expect(handleOrder).toBeCalledTimes(1);
      expect(localStorage.getItem('receipt')).toEqual(JSON.stringify(orderInitialValue));
    });
  });

  context('점심 바구니에 메뉴가 있을 때', () => {
    setLocalStorage('cart', foods);
    currentTotalPrice = calculateTotalPrice(foods);
    it('버튼의 가격은 13000원이다', () => {
      renderOrderButton(currentTotalPrice);

      const buttonText = screen.getByText(/13,000원/);

      expect(buttonText).toBeInTheDocument();
    });
    it('주문 버튼을 클릭하면 함수가 호출되고 로컬스토리지에 영수증이 등록된다.', () => {
      renderOrderButton(currentTotalPrice);

      const button = screen.getByTestId('orderSubmit');

      fireEvent.click(button);

      expect(handleOrder).toBeCalledTimes(1);
      setLocalStorage('receipt', receipt);
      expect(localStorage.getItem('receipt')).toEqual(JSON.stringify(receipt));
    });
  });
});
