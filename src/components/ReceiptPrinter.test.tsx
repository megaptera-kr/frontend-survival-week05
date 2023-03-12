import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

import fixtures from '../fixtures';

import Receipt from '../types/Receipt';

describe('ReceiptPrinter', () => {
  it('주문번호가 없을 경우 "영수증 나오는 곳"을 출력한다.', () => {
    const receipt = {} as Receipt;
    render(<ReceiptPrinter receipt={receipt} />);
    const receiptElement = screen.getByText('[영수증 나오는 곳]');
    expect(receiptElement).toBeInTheDocument();
  });

  it('주문번호가 있을 경우 영수증을 출력한다.', () => {
    render(<ReceiptPrinter receipt={fixtures.receipt} />);

    expect(screen.getByText('영수증')).toBeInTheDocument();
    expect(screen.getByText('주문번호')).toBeInTheDocument();
  });
});
