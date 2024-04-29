import { render, screen } from '@testing-library/react';
import Receipt from '.';
import fixtures from '../../../fixtures';

const context = describe;

describe('Receipt 컴포넌트', () => {
  // given
  const { receipt } = fixtures;
  let showReceiptState = true;

  context('showReceiptState가 false이면', () => {
    beforeEach(() => {
      showReceiptState = false;
      render(<Receipt receipt={receipt} showReceiptState={showReceiptState} />);
    });

    it('영수증 나오는 곳 문구가 등장한다.', () => {
      expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
    });
  });

  // when
  context('showReceiptState가 true이고 receipt props가 전달되면', () => {
    beforeEach(() => {
      showReceiptState = true;
      render(<Receipt receipt={receipt} showReceiptState={showReceiptState} />);
    });

    // then
    it('"주문번호", "주문목록"이 렌더링된다.', () => {
      expect(screen.getByText('주문번호')).toBeInTheDocument();
      expect(screen.getByText('주문목록')).toBeInTheDocument();
    });

    // then
    it('receipt의 menu 리스트가 렌더링된다.', () => {
      const menuItems = screen.getAllByRole('listitem');
      menuItems.forEach((_, index) => {
        const menuNameExp = new RegExp(receipt.menu[index].name);
        expect(screen.getByText(menuNameExp)).toBeInTheDocument();
      });
    });
  });
});
