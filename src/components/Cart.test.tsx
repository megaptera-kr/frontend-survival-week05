import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import Cart from './Cart';

import fixtures from '../fixtures';
import Receipt from '../types/Receipt';

let receipt: Receipt;

jest.mock('../hooks/useCreateOrder', () => () => ({
  createOrder: () => receipt,
}));

const setReceipt = jest.fn();

describe('Cart ', () => {
  beforeEach(() => {
    localStorage.setItem('cart', JSON.stringify(fixtures.selectedFoods));

    receipt = {
      id: '5',
      menu: fixtures.selectedFoods,
      totalPrice: 7000,
    };
  });

  it('renders without crash', async () => {
    render(<Cart setReceipt={setReceipt} />);

    screen.getByText('점심 바구니');

    screen.getByText('짜장밥(4,000원)');

    fireEvent.click(screen.getByText('합계: 7,000원 주문'));

    await waitFor(() => {
      expect(setReceipt).toBeCalledWith(receipt);
    });
  });
});
