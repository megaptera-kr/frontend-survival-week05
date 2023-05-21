import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import fixtures from '../../fixtures';

import Cart from './Cart';

const cart = fixtures.foods;
const setCart = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [
    cart,
    setCart,
  ],
}));

const context = describe;

describe('<Cart />', () => {
  const setReceipt = jest.fn();

  it('render cart', () => {
    render(<Cart setReceipt={setReceipt} />);

    screen.getByText(/점심 바구니/);
    screen.getByText(/짜장면/);
    screen.getByRole('button', { name: /합계/ });
  });

  context('click "주문" button', () => {
    it('set receipt', async () => {
      render(<Cart setReceipt={setReceipt} />);

      const orderButton = screen.getByText(/주문/);
      fireEvent.click(orderButton);
      await waitFor(() => {
        expect(setCart).toHaveBeenCalledWith([]);
        expect(setReceipt).toHaveBeenCalled();
      });
    });
  });
});
