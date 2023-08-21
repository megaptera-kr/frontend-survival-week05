import { render, screen } from '@testing-library/react';

import Receipt from '../components/Receipt';

import fixtures from '../../fixtures';

import { ReceiptType } from '../types/restaurants';

describe('Receipt', () => {
  const renderReceipt = (receipt: ReceiptType) => {
    render(<Receipt receipt={receipt} />);
  };

  it('Render without errors', () => {
    renderReceipt(fixtures.receipt);
    screen.getByText('짜장면(8,000)원');
    screen.getByText('짬뽕(5,000)원');
  });

  it('No receipt', () => {
    const noReceipt = {} as ReceiptType;
    renderReceipt(noReceipt);
    const receiptEl = screen.getByText('[영수증 나오는 곳]');
    expect(receiptEl).toBeInTheDocument();
  });
});
