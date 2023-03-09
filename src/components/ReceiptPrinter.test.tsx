import { render, screen } from '@testing-library/react';
import ReceiptPrinter from './ReceiptPrinter';

describe('ReceiptPrinter', () => {
  const receipt = {
    id: '1',
    menu: [
      { id: '1', name: '김밥', price: 5_000 },
      { id: '2', name: '비빔밥', price: 6_000 },
    ],
    totalPrice: 11_000,
  };

  render(<ReceiptPrinter receipt={receipt} />);

  it('renders without a crash', () => {
    expect(screen.getByText(/11,000/)).toBeInTheDocument();
    expect(screen.getByText(/김밥/)).toBeInTheDocument();
    expect(screen.getByText(/비빔밥/)).toBeInTheDocument();
  });
});
