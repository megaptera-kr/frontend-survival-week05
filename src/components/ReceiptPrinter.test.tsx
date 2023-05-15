import { render, screen } from '@testing-library/react';
import ReceiptPrinter from './ReceiptPrinter';
import fixtures from '../../fixtures';
import Receipt from '../types/Receipt';

const context = describe;

describe('ReceiptPrinter', () => {
  function renderReceiptPrinter(receipt: Receipt | undefined) {
    render((
      <ReceiptPrinter
        receipt={receipt}
      />
    ));
  }

  context('without receipt', () => {
    const { receipt } = fixtures;

    it('renders receipt', () => {
      renderReceiptPrinter(receipt);

      screen.getAllByText(/주문번호/);
      screen.getAllByText(/주문목록/);
      screen.getAllByText(/짜장면/);
    });
  });

  context('without receipt', () => {
    const receipt = undefined;

    it('renders message', () => {
      renderReceiptPrinter(receipt);

      screen.getByText(/영수증 나오는 곳/);
    });
  });
});
