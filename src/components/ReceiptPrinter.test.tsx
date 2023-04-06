import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

describe('ReceiptPrinter', () => {
  const receipt = {
    id: '1',
    menu: [
      { id: '2', name: '짬뽕', price: 8000 },
      { id: '8', name: '훈제오리김밥', price: 5500 },
    ],
    totalPrice: 13500,
  };
  it('renders without crash', () => {
    render(<ReceiptPrinter receipt={receipt} />);
    expect(screen.getByText(/13,500/)).toBeInTheDocument();
    expect(screen.getByText(/훈제오리/)).toBeInTheDocument();
  });
});
