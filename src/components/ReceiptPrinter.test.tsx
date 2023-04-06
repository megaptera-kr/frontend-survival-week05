import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

import fixtures from '../fixtures';

const context = describe;

describe('<ReceiptPrinter />', () => {
  const sampleReceipt = {
    id: '486',
    menu: fixtures.restaurants[0].menu,
    totalPrice: 45000,
  };

  it('renders properly', () => {
    render(<ReceiptPrinter receipt={sampleReceipt} />);

    screen.getByText('486');
    screen.getByText(/45,000/);
    screen.getByText(/짜장면/); // check rendering menuItem
    screen.getByText(/차돌짬뽕/);
  });

  context('with no receipt id', () => {
    it('returns [영수증 나오는 곳]', () => {
      render(<ReceiptPrinter receipt={{ ...sampleReceipt, id: '' }} />);

      screen.getByText('[영수증 나오는 곳]');
    });
  });
});
