import { render, screen } from '@testing-library/react';
import ReceiptPrint from './ReceiptPrint';

import useReceipt from '../../../hooks/__mocks__/useReceipt';

describe('renderReceiptPrint ', () => {
  function renderReceiptPrint() {
    const receipt = useReceipt();
    return render(
      <ReceiptPrint receipt={receipt} />,
    );
  }

  it('component ui test', () => {
    renderReceiptPrint();

    expect(screen.getByText(/주문번호/)).toBeInTheDocument();
    expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
  });
});
