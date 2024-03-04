import { render } from '@testing-library/react';
import ReceiptPrint from './ReceiptPrint';
import receipt from '../../fixtures/receipt';

const context = describe;

describe('Receipt', () => {
  context('랜더링 된 후 테스트', () => {
    // it('receipt prop가 빈배열 경우', () => {
    //   const emptyReceipt = {};
    //   const { getByText } = render(<ReceiptPrint receipt={emptyReceipt} />);

    //   expect(getByText('영수증이 나오는 곳')).toBeTruthy();
    // });
    it('receipt prop가 빈배열 아닌 경우', () => {
      const { getByText } = render(<ReceiptPrint receipt={receipt} />);

      expect(getByText('영수증')).toBeTruthy();
      expect(getByText('주문번호')).toBeTruthy();
      expect(getByText('주문목록')).toBeTruthy();
      expect(getByText(/짜장면/)).toBeTruthy();
      expect(getByText(/총 가격/)).toBeTruthy();
    });
  });
});
