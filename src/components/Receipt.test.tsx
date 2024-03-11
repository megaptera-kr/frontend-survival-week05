import { render, screen } from '@testing-library/react';

import Receipt from './Receipt';

import fixtures from '../../fixtures';
import ReceiptType from '../types/ReceiptType';

describe('Receipt 컴포넌트 테스트', () => {
  it('Receipt 데이터가 없을 때', () => {
    const emptyReceipt = {} as ReceiptType;
    render(<Receipt receipt={emptyReceipt} />);
    screen.getByText('[영수증 나오는 곳]');
  });

  it('Receipt 데이터가 있을 때', () => {
    const { receipt } = fixtures;
    render(<Receipt receipt={receipt} />);
    screen.getByText(/주문번호/);
    screen.getByText(/주문목록/);
    screen.getByText(/짜장면/);
  });
});
