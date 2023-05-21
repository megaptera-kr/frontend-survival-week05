import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import OrderButton from './OrderButton';

jest.mock('../utils/calcTotalPrice', () => () => 10000);

const context = describe;

describe('<OrderButton />', () => {
  const cart = fixtures.foods;

  const handleClickOrder = jest.fn();

  context('click "주문" button', () => {
    it('create order', () => {
      render(<OrderButton
        cart={cart}
        handleClickOrder={handleClickOrder}
      />);

      const orderButton = screen.getByText(/주문/);
      fireEvent.click(orderButton);
      expect(handleClickOrder).toHaveBeenCalled();
    });
  });
});
