import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

describe('ReceiptPrinter', () => {
  // given
  const receipt = {
    id: new Date().getTime().toString(),
    menu: [
      { id: '10', name: '가라아게카레', price: 14000 },
      { id: '13', name: '닭가슴살카레', price: 13000 },
    ],
    totalPrice: 27000,
  };

  it('renders without crash', () => {
    render(<ReceiptPrinter receipt={receipt} />);

    expect(screen.getByText(receipt.id)).toBeInTheDocument();
    expect(screen.getByText(/가라아게카레/)).toBeInTheDocument();
  });
});
