import { fireEvent, render, screen } from '@testing-library/react';
import OrderBtn from './OrderBtn';

describe('OrderBtn', () => {
  const handleorder = jest.fn();
  const totalPrice = 13000;
  it('render OrderBtn', () => {
    render(<OrderBtn totalPrice={totalPrice} handleOrder={handleorder} />);
    expect(screen.getByText(/합계: 13,000원 주문/)).toBeInTheDocument();
  });

  it('order click event', () => {
    render(<OrderBtn totalPrice={totalPrice} handleOrder={handleorder} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleorder).toBeCalled();
  });
});
