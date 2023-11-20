import { render, screen } from '@testing-library/react';
import ReceiptPrinter from './ReceiptPrinter';
import receipt from '../../fixtures/receipt';
import { Receipt } from '../types';

const context = describe;
describe('ReceiptPrinter', () => {
  context('when given receipt data', () => {
    it('renders elements', () => {
      // when
      render(<ReceiptPrinter receipt={receipt} />);
      // then
      screen.getByText('주문 번호');
    });
  });

  context('when given empty data', () => {
    it('renders elements', () => {
      // when
      render(<ReceiptPrinter receipt={{} as Receipt} />);
      // then
      screen.getByText('[영수증 나오는 곳]');
    });
  });
});
