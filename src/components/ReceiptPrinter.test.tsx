import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';
import fixtures from '../fixtures';

import Receipt from '../types/Receipt';

const context = describe;

describe('ReceiptPrinter', () => {
  function renderReceiptPrinter(receipt:Receipt) {
    render(
      <ReceiptPrinter
        receipt={receipt}
      />,
    );
  }

  context('when render with emtpy receipt', () => {
    const emptyReceipt = {} as Receipt;
    renderReceiptPrinter(emptyReceipt);
    it('can not see receipt', () => {
      screen.getByText('[영수증 나오는 곳]');
    });
  });

  // context('when render with receipt', () => {
  //   renderReceiptPrinter(fixtures.receipt);
  //   it('can see receipt', () => {
  //     screen.getByText(/주문번호/);
  //   });
  // });
});
