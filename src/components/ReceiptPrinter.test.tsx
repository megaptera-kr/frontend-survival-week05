import { render, screen } from '@testing-library/react';
import ReceiptPrinter from './ReceiptPrinter';
import fixture from '../../fixture';

const context = describe;
const orderReceipt = fixture.receipt;

describe('ReceiptPrinter', () => {
  context('when render it', () => {
    it('return', () => {
      render(<ReceiptPrinter orderReceipt={orderReceipt} />);
      screen.getByText(/RECEIPT_ID/);
      screen.getByText(/영수증/);
      screen.getByText(/주문번호/);
      screen.getByText(/13,000원/);
    });
  });
});
