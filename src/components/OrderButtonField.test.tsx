import { fireEvent, render, screen } from '@testing-library/react';
import OrderButtonField from './OrderButtonField';

describe('OrderButtonField', () => {
  const totalPrice = 18_000;

  const onClickOrder = jest.fn();

  function renderOrderButtonField() {
    render((
      <OrderButtonField
        totalPrice={totalPrice}
        onClickOrder={onClickOrder}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
    renderOrderButtonField();
  });

  it('renders order total price', () => {
    screen.getByText(/합계: 18,000원 주문/);
  });

  it('listens for order click event', () => {
    fireEvent.click(screen.getByText(/합계: 18,000원 주문/));

    expect(onClickOrder).toBeCalled();
  });
});
