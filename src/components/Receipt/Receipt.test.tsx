import { render, screen, waitFor } from '@testing-library/react';
import receipt from '../../../fixtures/receipt';
import Receipt from './Receipt';

const context = describe;

const onInitReceipt = () => {
  console.log('init');
};

describe('장바구니의 주문을 접수한다.', () => {
  context('장바구니의 상품을 API 등록요청한다.', () => {
    it('구매내용이 올바르게 노출된다.', async () => {
      render(<Receipt receipt={receipt} onInitReceipt={onInitReceipt} />);
      screen.getByText(/주문번호/);
    });
  });
});
