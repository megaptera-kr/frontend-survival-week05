import { render, screen } from '@testing-library/react';
import ReceiptPrinter from './ReceiptPrinter';
import fixtures from '../../fixtures';
import Receipt from '../types/Receipt';

const context = describe;

describe('ReceiptPrinter', () => {
  context('with receipt', () => {
    const { receipt } = fixtures;
    it('renders ReceipPrinter', () => {
      render((<ReceiptPrinter receipt={receipt} />));

      screen.getByText('영수증');
      screen.getByText('주문목록');
      screen.getByText('짜장면(8,000원)');
      screen.getByText('짬뽕(5,000원)');
      screen.getByText('총 가격: 13,000원');
    });
  });

  context('without receipt', () => {
    const receipt = {} as Receipt;
    it('renders where to get the receipt message', () => {
      render((<ReceiptPrinter receipt={receipt} />));

      screen.getByText('[영수증 나오는 곳]');
    });
  });
});
