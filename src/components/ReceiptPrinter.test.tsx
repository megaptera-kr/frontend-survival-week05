import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import ReceiptPrinter from './ReceiptPrinter';

const context = describe;

describe('<ReceiptPrinter />', () => {
  context('with receipt', () => {
    const { receipt } = fixtures;

    it('renders receipt', () => {
      render(<ReceiptPrinter receipt={receipt} />);

      screen.getByText(/RECEIPT_ID/);
      screen.getByText(/짜장면/);
      screen.getByText(/13,000/);
    });
  });

  context('without receipt', () => {
    const receipt = null;

    it('renders receipt', () => {
      render(<ReceiptPrinter receipt={receipt} />);

      screen.getByText(/영수증 나오는 곳/);
    });
  });
});
