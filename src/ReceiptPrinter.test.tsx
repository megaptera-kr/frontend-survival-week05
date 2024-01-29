import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

import receipt from '../fixtures/receipt';
import Receipt from './types/Receipt';

describe('ReceiptPrinter', () => {
  it('render ReceiptPrinter', () => {
    render(<ReceiptPrinter receipt={receipt} />);
    screen.getByText(/주문번호/);
    screen.getByText(/주문목록/);
    screen.getByText(/짜장면/);
  });

  it('render empty ReceiptPrinter', () => {
    const emptyReceipt = {} as Receipt;
    render(<ReceiptPrinter receipt={emptyReceipt} />);
    screen.getByText('[영수증 나오는 곳]');
  });
});
