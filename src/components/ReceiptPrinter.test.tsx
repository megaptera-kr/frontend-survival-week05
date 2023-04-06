import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

describe('ReceiptPrinter', () => {
  const receipt = {
    id: '1',
    menu: [
      {
        id: '1',
        name: 'Kimchi',
        price: 5_000,
      },
      {
        id: '1',
        name: 'Egg custard',
        price: 5_000,
      },
    ],
    totalPrice: 10_000,
  };

  it('renders without a crash', () => {
    render(<ReceiptPrinter receipt={receipt} />);

    expect(screen.getByText(/10,000/)).toBeInTheDocument();
    expect(screen.getByText(/Kimchi/)).toBeInTheDocument();
    expect(screen.getByText(/Egg custard/)).toBeInTheDocument();
  });
});
