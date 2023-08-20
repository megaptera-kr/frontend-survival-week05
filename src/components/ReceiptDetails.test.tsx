import { render, screen } from '@testing-library/react';
import receipt from '../../fixtures/receipt';

import ReceiptDetails from './ReceiptDetails';

describe('ReceiptDetails', () => {
  it('주문 내역이 올바르게 렌더링되어야 함', () => {
    const { getByText } = render(<ReceiptDetails receipt={receipt} />);

    const totalPrice = screen.getByText(/13,000/);
    const menu1 = getByText(/짜장면/);
    const menu2 = getByText(/짬뽕/);
    expect(totalPrice).toBeInTheDocument();
    expect(menu1).toBeInTheDocument();
    expect(menu2).toBeInTheDocument();
  });
});
