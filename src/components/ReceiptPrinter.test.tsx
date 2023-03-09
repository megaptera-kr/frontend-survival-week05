import { render, screen } from '@testing-library/react';

import ReceiptPrinter from './ReceiptPrinter';

import fixtures from '../fixtures';

import Receipt from '../types/Receipt';

const context = describe;

let receipt: Receipt;

describe('ReceiptPrinter', () => {
  function renderReceiptPrinter() {
    render(<ReceiptPrinter receipt={receipt} />);
  }

  context('영수증을 출력하지 않으면', () => {
    beforeEach(() => {
      receipt = { id: '', menu: fixtures.selectedFoods, totalPrice: 0 };
    });

    it('영수증 나오는 곳이 render된다', () => {
      renderReceiptPrinter();

      screen.getByText('[영수증 나오는 곳]');
    });
  });

  context('주문을 받아 영수증이 나오면', () => {
    beforeEach(() => {
      receipt = { id: '3', menu: fixtures.selectedFoods, totalPrice: 7000 };
    });

    it('영수증이 출력된다', () => {
      renderReceiptPrinter();

      screen.getByText('주문번호');
      screen.getByText('주문목록');
      screen.getByText('총 가격: 7,000원');
    });
  });
});
