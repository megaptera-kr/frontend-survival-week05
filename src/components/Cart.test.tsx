import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';

import Cart from './Cart';
import fixtures from '../fixtures';

const setMenus = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => ([fixtures.menus, setMenus]),
}));

describe('Cart ', () => {
  const setReceipt = jest.fn();
  const renderCart = () => render(<Cart setReceipt={setReceipt} />);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('장바구니 출력', () => {
    renderCart();

    expect(screen.getByText('짜장면(8,000원)'));
    expect(screen.getByText('짬뽕(8,000원)'));
  });

  it('취소 버튼 클릭 시 setMenus 함수 호출', () => {
    renderCart();

    const cancelButton = screen.getAllByText('취소');

    fireEvent.click(cancelButton[0]);

    expect(setMenus).toHaveBeenCalled();
  });

  it('주문 버튼 클릭 시 setReceipt 함수 호출', async () => {
    renderCart();

    const orderButton = screen.getByText('합계: 28,500원 주문');

    fireEvent.click(orderButton);

    await waitFor(() => {
      expect(setReceipt).toHaveBeenCalled();
    });
  });
});
