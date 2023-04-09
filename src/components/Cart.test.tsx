import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Cart', () => {
  it('render cart', () => {
    const setReceipt = jest.fn();
    render(<Cart setReceipt={setReceipt} />);
    screen.getByText('주문 바구니');
  });
});
