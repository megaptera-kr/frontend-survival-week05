import { render, screen } from '@testing-library/react';
import ReceiptDetail from './ReceiptDetail';
import useReceipt from '../../../hooks/__mocks__/useReceipt';

describe('ReceiptDetail', () => {
  const receipt = useReceipt();
  function renderReceiptDetail() {
    return render(
      <ReceiptDetail receipt={receipt} />,
    );
  }
  it('ui components test', () => {
    renderReceiptDetail();

    expect(screen.getByText(/RECEIPT_ID/)).toBeInTheDocument();
  });
});
